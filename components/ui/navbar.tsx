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

  return (
    <MotionConfig transition={{ bounce: 0, type: 'tween', duration: 0.18 }}>
      <nav className="relative">
        <ul className="flex items-center gap-1.5">
          {list?.map((item) => {
            const isHovered = hovered === item.id;

            return (
              <li
                key={item.id}
                className="relative py-2"
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  className={`
                    relative flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-all
                    hover:text-white
                    ${isHovered ? 'text-white' : item.id === 1 ? 'text-white' : 'text-slate-300'}
                  `}
                  href={item.url}
                >
                  {item.title}
                  {item.dropdown && (
                    <svg
                      className={`ml-1.5 h-3.5 w-3.5 transition-transform duration-200 ${
                        isHovered ? 'rotate-180 text-white' : 'text-slate-400'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Animated Underline */}
                {(isHovered || (hovered === null && item.id === 1)) && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-white shadow-sm shadow-white/50"
                  />
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full pt-1 z-50 min-w-[280px]"
                    >
                      <div className="flex flex-col rounded-2xl bg-[#11131C] border border-white/10 p-2.5 shadow-2xl backdrop-blur-2xl">
                        {item.items?.map((nav) => (
                          <Link
                            key={`link-${nav.id}`}
                            href={nav.url}
                            className="flex items-center rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                          >
                            {nav.title}
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
