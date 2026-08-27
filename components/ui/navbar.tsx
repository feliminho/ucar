'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, MotionConfig, AnimatePresence } from 'framer-motion';
import * as React from 'react';

export type IMenu = {
  id: number;
  title: string;
  url: string;
  dropdown?: boolean;
  items?: IMenu[];
};

type MenuProps = {
  list: IMenu[];
};

const Menu = ({ list }: MenuProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const handleClose = () => {
    setHovered(null);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  return (
    <MotionConfig transition={{ bounce: 0, type: 'tween', duration: 0.18 }}>
      <nav className="relative">
        <ul className="flex items-center gap-1.5">
          {list?.map((item) => {
            const isHovered = hovered === item.id;

            return (
              <li
                key={item.id}
                className="relative py-2 flex-shrink-0"
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  className={`
                    relative flex items-center justify-center rounded-lg px-3.5 py-2 text-sm font-semibold transition-all whitespace-nowrap
                    ${isHovered ? 'text-[#E50914]' : item.id === 1 ? 'text-[#111111] font-bold' : 'text-[#1A1A1A]'}
                    hover:text-[#E50914]
                  `}
                  href={item.url}
                  onClick={handleClose}
                >
                  <span className="whitespace-nowrap">{item.title}</span>
                  {item.dropdown && (
                    <svg
                      className={`ml-1.5 h-3.5 w-3.5 flex-shrink-0 transition-transform duration-200 ${
                        isHovered ? 'rotate-180 text-[#E50914]' : 'text-slate-500'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Animated Underline (#E50914 Red) */}
                {(isHovered || (hovered === null && item.id === 1)) && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[#E50914] shadow-sm shadow-[#E50914]/40"
                  />
                )}

                {/* Standard Clean Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full pt-1 z-50 min-w-[280px]"
                    >
                      <div className="flex flex-col rounded-2xl bg-white border border-[#E5E5E5] p-2 shadow-2xl">
                        {item.items?.map((nav) => (
                          <Link
                            key={`link-${nav.id}`}
                            href={nav.url}
                            onClick={handleClose}
                            className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-semibold text-[#1A1A1A] transition-colors hover:bg-red-50 hover:text-[#E50914]"
                          >
                            <span>{nav.title}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </nav>
    </MotionConfig>
  );
};

export default Menu;
