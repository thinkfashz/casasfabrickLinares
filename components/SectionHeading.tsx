import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeadingProps } from '../types';

export const SectionHeading: React.FC<SectionHeadingProps> = ({ pre, title, subtitle, center = true }) => (
  <div className={`mb-16 ${center ? 'text-center' : 'text-left'} relative z-10`}>
    <motion.span 
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
      className="text-amber-500/80 text-xs font-mono tracking-[0.3em] uppercase mb-4 block"
    >
      {pre}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight"
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }} whileInView={{ width: center ? 100 : 60 }}
      className={`h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent ${center ? 'mx-auto' : ''} mb-6`}
    />
    <motion.p 
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
      className={`text-slate-400 text-lg font-light max-w-2xl ${center ? 'mx-auto' : ''}`}
    >
      {subtitle}
    </motion.p>
  </div>
);