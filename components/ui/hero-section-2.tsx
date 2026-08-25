'use client';

import React from 'react';
import { cn } from "@/lib/utils";
import { motion, type Variants } from 'framer-motion';
import { Globe, Phone, MapPin, ArrowRight } from 'lucide-react';

const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
  const icons = {
    website: <Globe className="h-4 w-4 text-cyan-400" />,
    phone: <Phone className="h-4 w-4 text-cyan-400" />,
    address: <MapPin className="h-4 w-4 text-cyan-400" />,
  };
  return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};

export interface HeroSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  logo?: {
    url?: string;
    alt?: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo }, ref) => {
    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-[#070E1B] text-white md:flex-row border-b border-slate-800",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
          <div>
            <motion.header className="mb-8" variants={itemVariants}>
              {logo && (
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#00C2FF] to-[#00F5D4] text-[#070E1B] font-black">
                    UY
                  </div>
                  <div>
                    {logo.text && <p className="text-lg font-bold text-white">{logo.text}</p>}
                    {slogan && <p className="text-xs tracking-wider text-cyan-400">{slogan}</p>}
                  </div>
                </div>
              )}
            </motion.header>

            <motion.main variants={containerVariants}>
              <motion.h1 className="text-3xl font-extrabold leading-tight text-white md:text-5xl" variants={itemVariants}>
                {title}
              </motion.h1>
              <motion.div className="my-6 h-1 w-20 bg-gradient-to-r from-[#00C2FF] to-[#00F5D4]" variants={itemVariants} />
              <motion.p className="mb-8 max-w-md text-sm text-slate-300 leading-relaxed" variants={itemVariants}>
                {subtitle}
              </motion.p>
              <motion.a
                href={callToAction.href}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00C2FF] to-[#00F5D4] px-6 py-3.5 text-sm font-bold text-[#070E1B] shadow-lg shadow-cyan-500/25 transition-transform hover:scale-105"
                variants={itemVariants}
              >
                <span>{callToAction.text}</span>
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.main>
          </div>

          {/* Bottom Section: Footer Info */}
          <motion.footer className="mt-12 w-full pt-6 border-t border-slate-800" variants={itemVariants}>
            <div className="grid grid-cols-1 gap-4 text-xs text-slate-400 sm:grid-cols-3">
              <div className="flex items-center">
                <InfoIcon type="website" />
                <span>{contactInfo.website}</span>
              </div>
              <div className="flex items-center">
                <InfoIcon type="phone" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <InfoIcon type="address" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.footer>
        </div>

        {/* Right Side: Image with Clip Path Animation */}
        <motion.div 
          className="w-full min-h-[340px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5 relative"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
          }}
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#070E1B] via-transparent to-transparent md:hidden" />
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
