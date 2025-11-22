import React from 'react';
import { motion } from 'framer-motion';
import { TimelineEventProps } from '../types';

const TimelineEvent: React.FC<TimelineEventProps> = ({ title, description, icon, index, isLast }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.15 }}
    className="relative pl-8 pb-12 group"
  >
    {/* Vertical Line */}
    {!isLast && (
      <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-amber-500/50 to-white/5" />
    )}
    
    {/* Icon Bubble */}
    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#1a1a1a] border border-amber-500 text-amber-500 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform duration-300 z-10">
      <div className="w-2 h-2 bg-amber-500 rounded-full" />
    </div>

    <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 hover:bg-white/[0.05] transition-colors">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-amber-500">{icon}</span>
        <h4 className="text-white font-serif font-bold text-lg">{title}</h4>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export const Timeline = () => (
  <div className="relative">
    <TimelineEvent 
      index={0} 
      title="Diseño & Ingeniería" 
      description="No copiamos planos. Adaptamos la estructura al suelo de tu terreno específico."
      icon={<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 22h20M2 2h20M2 12h20M12 2v20"/></svg>}
    />
    <TimelineEvent 
      index={1} 
      title="Obra Gruesa Blindada" 
      description="Radier H-25 con hidrófugo. Estructura Metalcom 0.85mm mínimo. Sin ahorros ocultos."
      icon={<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>}
    />
    <TimelineEvent 
      index={2} 
      title="Supervisión Diaria" 
      description="Reportes por WhatsApp con fotos y videos reales. Ves lo que se instala dentro de los muros."
      icon={<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20M12 2v20"/></svg>}
    />
    <TimelineEvent 
      index={3} 
      title="Entrega Llave en Mano" 
      description="Pruebas de presión de agua, certificación eléctrica T1 y aseo industrial profundo."
      icon={<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>}
      isLast
    />
  </div>
);