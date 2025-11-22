import React from 'react';
import { motion } from 'framer-motion';

export const BudgetChart = () => {
  const data = [
    { label: 'Materiales de Alta Calidad', percent: 55, color: 'bg-amber-500' },
    { label: 'Mano de Obra Especializada', percent: 30, color: 'bg-amber-700' },
    { label: 'Supervisión & Gestión', percent: 15, color: 'bg-slate-700' },
  ];

  return (
    <div className="w-full">
      <h4 className="text-white font-serif text-lg mb-6 flex items-center gap-2">
        <span className="w-2 h-6 bg-amber-500 rounded-full" />
        Distribución de tu Inversión
      </h4>
      
      <div className="flex h-12 w-full rounded-full overflow-hidden mb-6 ring-2 ring-white/5">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ width: 0 }}
            whileInView={{ width: `${item.percent}%` }}
            transition={{ duration: 1, delay: i * 0.2, ease: "circOut" }}
            className={`h-full ${item.color} relative group`}
          >
             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition-opacity" />
          </motion.div>
        ))}
      </div>

      <div className="space-y-3">
        {data.map((item, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${item.color} shadow-[0_0_8px_currentColor]`} />
              <span className="text-slate-300">{item.label}</span>
            </div>
            <span className="font-mono font-bold text-white">{item.percent}%</span>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-red-900/10 border border-red-900/30 rounded-lg">
        <p className="text-xs text-red-300 leading-relaxed">
          <strong className="uppercase tracking-widest block mb-1 text-red-400">Constructora Promedio:</strong>
          Gastan solo el <strong>35%</strong> en materiales y <strong>40%</strong> se va en "Gastos Generales" (su ganancia oculta). Nosotros invertimos en tu casa, no en nuestra oficina.
        </p>
      </div>
    </div>
  );
};