import React from 'react';
import { motion } from 'framer-motion';
import { Home, Zap, Calculator, MessageCircle, User } from 'lucide-react';

export const MobileNav = ({ activeSection }: { activeSection: string }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'inicio', icon: <Home size={20} />, label: 'Inicio' },
    { id: 'historia', icon: <User size={20} />, label: 'Historia' },
    { id: 'calculadora', icon: <Calculator size={20} />, label: 'Cotizar' },
    { id: 'comparativa', icon: <Zap size={20} />, label: 'Calidad' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        {/* Gradient fade at top of bar */}
        <div className="h-8 w-full bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
        
        <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 px-4 pb-safe-bottom pt-2">
            <div className="flex justify-between items-center h-16">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className="flex flex-col items-center justify-center w-16 relative"
                    >
                        <div className={`transition-colors duration-300 ${activeSection === item.id ? 'text-amber-500' : 'text-slate-500'}`}>
                            {item.icon}
                        </div>
                        <span className={`text-[10px] font-medium mt-1 transition-colors duration-300 ${activeSection === item.id ? 'text-amber-500' : 'text-slate-600'}`}>
                            {item.label}
                        </span>
                        {activeSection === item.id && (
                            <motion.div 
                                layoutId="navIndicator"
                                className="absolute -top-2 w-8 h-0.5 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]"
                            />
                        )}
                    </button>
                ))}
                
                <button 
                    onClick={() => window.open("https://wa.me/56930121625", "_blank")}
                    className="flex flex-col items-center justify-center w-16 bg-green-600/20 rounded-2xl h-12 border border-green-500/30"
                >
                    <MessageCircle size={20} className="text-green-500" />
                </button>
            </div>
        </div>
    </div>
  );
};