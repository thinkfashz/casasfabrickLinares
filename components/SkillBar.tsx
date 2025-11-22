import React from 'react';
import { motion } from 'framer-motion';
import { SkillBarProps } from '../types';

export const SkillBar: React.FC<SkillBarProps> = ({ label, icon, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="mb-6"
  >
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2 text-slate-200 font-medium">
        <span className="text-amber-500">{icon}</span> {label}
      </div>
      <span className="text-xs font-mono text-amber-500/60">100% DOMINIO</span>
    </div>
    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
        className="h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
      />
    </div>
  </motion.div>
);