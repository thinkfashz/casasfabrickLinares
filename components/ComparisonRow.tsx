import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, Check } from 'lucide-react';
import { ComparisonRowProps } from '../types';

export const ComparisonRow: React.FC<ComparisonRowProps> = ({ feature, bad, good, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="grid grid-cols-1 md:grid-cols-3 border-b border-white/5 py-6 hover:bg-white/[0.02] transition-colors group"
  >
    <div className="text-slate-200 font-medium md:col-span-1 flex items-center gap-2 mb-2 md:mb-0">
      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> {feature}
    </div>
    <div className="text-red-400/80 md:col-span-1 text-sm md:px-4 flex items-start gap-2">
      <XCircle size={16} className="mt-1 shrink-0" /> {bad}
    </div>
    <div className="text-green-400 md:col-span-1 text-sm md:px-4 font-medium flex items-start gap-2 mt-2 md:mt-0">
      <Check size={16} className="mt-1 shrink-0" /> {good}
    </div>
  </motion.div>
);