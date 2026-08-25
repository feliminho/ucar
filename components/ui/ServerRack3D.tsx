'use client';

import { motion } from 'framer-motion';
import { Gauge, Headphones, Shield, Cloud, Zap, Server, Building2 } from 'lucide-react';

export function ServerRack3D() {
  return (
    <div className="relative flex h-full min-h-[460px] w-full items-center justify-center">
      
      {/* Glow Radial Background */}
      <div className="absolute h-[380px] w-[380px] rounded-full bg-cyan-500/15 blur-3xl filter" />
      <div className="absolute h-[240px] w-[240px] rounded-full bg-blue-600/20 blur-2xl filter" />

      {/* Floating HUD Badge 1: Top Left */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-2 left-4 z-30 flex items-center gap-3 rounded-xl border border-cyan-500/30 bg-[#0B1528]/90 px-3.5 py-2 shadow-xl backdrop-blur-md"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
          <Building2 className="h-4 w-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-extrabold text-white">TIER III</span>
          <span className="text-[10px] text-slate-400">İstanbul Veri Merkezi</span>
        </div>
      </motion.div>

      {/* Floating HUD Badge 2: Mid Left */}
      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 -left-6 z-30 flex items-center gap-3 rounded-xl border border-cyan-500/30 bg-[#0B1528]/90 px-3.5 py-2 shadow-xl backdrop-blur-md"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
          <Gauge className="h-4 w-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-extrabold text-white">NVMe SSD</span>
          <span className="text-[10px] text-slate-400">Ultra Hız</span>
        </div>
      </motion.div>

      {/* Floating HUD Badge 3: Right */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 -right-4 z-30 flex items-center gap-3 rounded-xl border border-cyan-500/30 bg-[#0B1528]/90 px-3.5 py-2 shadow-xl backdrop-blur-md"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
          <Headphones className="h-4 w-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-extrabold text-white">7/24 Teknik Destek</span>
          <span className="text-[10px] text-slate-400">Uzman Ekip</span>
        </div>
      </motion.div>

      {/* Isometric 3D Server Rig */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Isometric Platform & Grid */}
        <div className="relative flex flex-col items-center">
          
          {/* Main 3D Server Stack */}
          <div className="relative w-64 md:w-72 space-y-3 p-2">
            
            {/* Server Unit 1 (Top) */}
            <div className="relative rounded-xl border border-cyan-400/40 bg-gradient-to-r from-[#0F1E36] via-[#132746] to-[#0A1628] p-3.5 shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                  </div>
                  <div className="h-1.5 w-16 rounded-full bg-cyan-500/30" />
                </div>
                <div className="flex gap-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-2.5 w-1.5 rounded-xs bg-slate-700/60" />
                  ))}
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-cyan-500/20 pt-1.5 text-[10px] font-mono text-cyan-300">
                <span>RACK-NODE-01</span>
                <span className="text-emerald-400 font-bold">100% ONLINE</span>
              </div>
            </div>

            {/* Server Unit 2 (Middle) */}
            <div className="relative rounded-xl border border-cyan-400/30 bg-gradient-to-r from-[#0F1E36] via-[#132746] to-[#0A1628] p-3.5 shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="h-2 w-2 rounded-full bg-slate-600" />
                  </div>
                  <div className="h-1.5 w-20 rounded-full bg-cyan-500/30" />
                </div>
                <div className="flex gap-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-2.5 w-1.5 rounded-xs bg-cyan-500/40" />
                  ))}
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-cyan-500/20 pt-1.5 text-[10px] font-mono text-cyan-300">
                <span>NVMe-ARRAY-X4</span>
                <span className="text-cyan-400">7.2 TB/s</span>
              </div>
            </div>

            {/* Server Unit 3 (Bottom) */}
            <div className="relative rounded-xl border border-cyan-400/30 bg-gradient-to-r from-[#0F1E36] via-[#132746] to-[#0A1628] p-3.5 shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="h-1.5 w-14 rounded-full bg-cyan-500/30" />
                </div>
                <div className="flex gap-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-2.5 w-1.5 rounded-xs bg-slate-700/60" />
                  ))}
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-cyan-500/20 pt-1.5 text-[10px] font-mono text-cyan-300">
                <span>DDoS-SHIELD-V2</span>
                <span className="text-emerald-400 font-bold">1 Tbps ACTIVE</span>
              </div>
            </div>

          </div>

          {/* Floating Neon Cloud with Lightning in front */}
          <motion.div
            animate={{ y: [-3, 3, -3], scale: [1, 1.02, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 flex h-20 w-32 items-center justify-center rounded-3xl border border-cyan-400/50 bg-gradient-to-tr from-cyan-600 to-blue-600 p-2 shadow-2xl shadow-cyan-400/40"
          >
            <div className="relative flex items-center justify-center">
              <Cloud className="h-12 w-12 text-white/90 fill-white/20" />
              <Zap className="absolute h-6 w-6 text-yellow-300 fill-yellow-300 animate-pulse" />
            </div>
          </motion.div>

          {/* Pedestal Base with Glowing Cyber Neon Line */}
          <div className="relative -mt-3 h-10 w-72 md:w-80 rounded-[28px] border border-cyan-400/40 bg-gradient-to-b from-[#0B1528] to-[#040812] shadow-2xl shadow-cyan-500/30">
            <div className="absolute inset-x-4 top-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>

        </div>

      </div>

    </div>
  );
}
