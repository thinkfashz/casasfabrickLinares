import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  MessageCircle, ShieldCheck, XCircle, Hammer, 
  Zap, ArrowDown, Ruler, Box, Activity, ChevronRight, Award, Star, FileCheck,
  Check, Calculator
} from 'lucide-react';

import { SectionHeading } from './components/SectionHeading';
import { ComparisonRow } from './components/ComparisonRow';
import { FAQItem } from './components/FAQItem';
import { MobileNav } from './components/MobileNav';
import { BudgetChart } from './components/BudgetChart';
import { Timeline } from './components/Timeline';
import { COSTO_M2, WHATSAPP_NUMBER } from './constants';

// --- UTILITIES ---

const formatCLP = (amount: number) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

const openWhatsApp = (msg = "") => {
  const message = msg || "Hola, quiero construir con el estándar Fabrick sin sorpresas.";
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
};

// --- MAIN COMPONENT ---

export default function App() {
  const [m2, setM2] = useState(140);
  const [activeSection, setActiveSection] = useState('inicio');
  
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  const totalPrice = m2 * COSTO_M2;

  // Detect active section for MobileNav
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'historia', 'verdad', 'comparativa', 'calculadora'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-amber-500/30 overflow-x-hidden pb-20 md:pb-0">
      
      {/* Desktop Navbar - Hidden on Mobile */}
      <nav className="hidden md:block fixed top-0 w-full z-50 px-6 py-4 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-serif text-2xl font-bold tracking-tighter text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            CASAS<span className="text-amber-500">FABRICK</span>.
          </div>
          <div className="flex gap-8 text-xs font-mono tracking-widest uppercase items-center text-slate-400">
            <a href="#historia" className="hover:text-amber-400 transition-colors">El Método</a>
            <a href="#comparativa" className="hover:text-amber-400 transition-colors">Calidad</a>
            <a href="#calculadora" className="hover:text-amber-400 transition-colors">Presupuesto</a>
            <button onClick={() => openWhatsApp()} className="flex items-center gap-2 bg-white text-black hover:bg-amber-500 px-5 py-2 rounded-full font-bold transition-all text-xs hover:scale-105">
              <MessageCircle size={14}/> +56 9 3012 1625
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <MobileNav activeSection={activeSection} />

      {/* --- HERO SECTION --- */}
      <header id="inicio" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1500] via-[#050505] to-[#000000]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
        
        {/* Animated Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }} 
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" 
        />
        
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center">
          
          {/* Trust Badge */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 rounded-full text-amber-400 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase mb-8 backdrop-blur-sm"
          >
            <Star size={12} fill="currentColor" /> Estándar Superior Certificado
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-medium text-white mb-6 leading-[1] md:leading-[0.9]">
            Construcción sin<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-600">Letra Chica.</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            No somos una empresa de marketing que subcontrata barato. 
            Somos constructores técnicos obsesionados con la calidad estructural.
          </p>

          <div className="flex flex-col w-full md:w-auto gap-4">
            <button onClick={() => openWhatsApp()} className="w-full md:w-auto bg-amber-500 text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-amber-400 transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95">
              <MessageCircle className="fill-black/20" /> Cotizar Proyecto
            </button>
            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 font-mono uppercase tracking-widest">
              <span className="flex items-center gap-1"><ShieldCheck size={12}/> Garantía 5 años</span>
              <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
              <span className="flex items-center gap-1"><FileCheck size={12}/> Llave en Mano</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-32 md:bottom-10 left-1/2 -translate-x-1/2 text-slate-600"
        >
          <ArrowDown size={20} />
        </motion.div>
      </header>

      {/* --- STORY SECTION (IMPROVED) --- */}
      <section id="historia" className="py-20 md:py-32 bg-[#080808] relative border-t border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Narrative */}
            <div className="lg:col-span-7 relative z-10">
              <SectionHeading 
                center={false}
                pre="El Fundador"
                title="Ingeniería vs. Improvisación"
                subtitle="La construcción en Chile tiene un problema grave: la informalidad disfrazada de empresa."
              />
              
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-light">
                <p>
                  <span className="text-white font-medium">Hola, soy el fundador de Casas Fabrick.</span> Empecé mi carrera arreglando los desastres de otros. Casas con techos mal diseñados, sistemas eléctricos peligrosos y muros que no pasaban una inspección básica.
                </p>
                <p>
                  Me di cuenta de que el cliente promedio no tiene cómo defenderse. Le muestran un render bonito en 3D, pero no sabe si el radier tiene la densidad correcta o si el perfil de acero es estructural o "de papel".
                </p>
                <div className="border-l-2 border-amber-500 pl-6 py-2 my-8 bg-white/[0.02] rounded-r-xl">
                  <p className="text-white italic text-xl font-serif">
                    "Creé Fabrick para ser la defensa técnica de mis clientes. Aquí no se improvisa; se calcula, se ejecuta y se certifica."
                  </p>
                </div>
                <p>
                  Mi compromiso es simple: <strong className="text-amber-500">Yo superviso.</strong> No un capataz junior. Cuando contratas Fabrick, contratas mis ojos y mi experiencia en tu terreno todos los días.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                    { icon: <Hammer />, label: "Estructura" },
                    { icon: <Zap />, label: "Electricidad SEC" },
                    { icon: <Activity />, label: "Sanitario" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-4 border border-white/5">
                        <div className="text-amber-500">{item.icon}</div>
                        <span className="text-sm font-medium text-slate-300">{item.label}</span>
                    </div>
                ))}
              </div>
            </div>

            {/* Right: Timeline & Stats */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#0E0E10] p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden sticky top-24">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
                
                <h3 className="text-xl text-white font-serif mb-8 flex items-center gap-2 relative z-10">
                  <Ruler className="text-amber-500" /> Proceso Transparente
                </h3>
                
                <Timeline />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- VISUAL CHARTS & DATA --- */}
      <section id="verdad" className="py-20 bg-[#050505] relative">
        <div className="max-w-6xl mx-auto px-6">
            <SectionHeading 
                center={true}
                pre="Transparencia Total"
                title="¿A dónde va tu dinero?"
                subtitle="La mayoría de las constructoras esconden su margen en la baja calidad de los materiales. Nosotros te mostramos los números."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#0E0E10] border border-white/10 rounded-3xl p-8 md:p-12 items-center">
                <div className="order-2 md:order-1">
                    <BudgetChart />
                </div>
                <div className="order-1 md:order-2 space-y-6">
                    <h3 className="text-2xl text-white font-serif">Materiales Certificados</h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        Utilizamos exclusivamente marcas líderes en el mercado. No usamos "alternativos" chinos de baja especificación.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-slate-300 text-sm">
                            <Check className="text-amber-500 shrink-0" size={16} /> 
                            <span>Metalcom <strong className="text-white">Cintac</strong> (Acero real)</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-300 text-sm">
                            <Check className="text-amber-500 shrink-0" size={16} /> 
                            <span>Aislación <strong className="text-white">Fisiterra/Volcan</strong></span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-300 text-sm">
                            <Check className="text-amber-500 shrink-0" size={16} /> 
                            <span>Ventanas <strong className="text-white">Termopanel PVC</strong></span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-300 text-sm">
                            <Check className="text-amber-500 shrink-0" size={16} /> 
                            <span>Cañerías <strong className="text-white">Tigre/Vinilit</strong> (Alta presión)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* --- COMPARISON TABLE --- */}
      <section id="comparativa" className="py-24 bg-[#080808] relative border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading 
            pre="La Evidencia" 
            title="Estándar Fabrick" 
            subtitle="No construimos casas para venderlas rápido. Construimos casas para que duren generaciones."
          />

          <div className="bg-[#0E0E10] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#151518] border-b border-white/10 py-4 px-6 md:px-0 text-[10px] md:text-xs font-mono uppercase tracking-widest text-slate-500">
              <div className="hidden md:block md:px-4 py-2">Criterio</div>
              <div className="md:px-4 py-2 text-red-400">Lo Común</div>
              <div className="md:px-4 py-2 text-amber-500">Estándar Fabrick</div>
            </div>

            <div className="divide-y divide-white/5">
                <ComparisonRow 
                feature="Estructura Muros" 
                bad="Tabiquería 0.5mm (Se dobla con la mano)" 
                good="Metalcom Estructural 0.85mm+ Certificado" 
                index={0}
                />
                <ComparisonRow 
                feature="Aislación Térmica" 
                bad="Plumavit suelto o lana de baja densidad" 
                good="Lana Mineral Alta Densidad + Tyvek" 
                index={1}
                />
                <ComparisonRow 
                feature="Electricidad" 
                bad="Empalmes improvisados, riesgo de incendio" 
                good="Norma SEC Certificada T1" 
                index={2}
                />
                <ComparisonRow 
                feature="Presupuesto" 
                bad="Barato al inicio, lleno de 'extras' después" 
                good="Precio Cerrado Llave en Mano" 
                index={3}
                />
                <ComparisonRow 
                feature="Post-Venta" 
                bad="Desaparecen tras el último pago" 
                good="Garantía Legal 5 Años Real" 
                index={4}
                />
            </div>
          </div>
        </div>
      </section>

      {/* --- CALCULADORA --- */}
      <section id="calculadora" className="py-24 relative bg-[#050505] pb-32 md:pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Panel Calculadora */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-[#121214] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden group"
              >
                {/* Background sheen effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="flex justify-between items-start mb-8">
                    <h3 className="text-2xl text-white font-serif">Presupuesto</h3>
                    <div className="bg-amber-500/10 text-amber-500 p-2 rounded-lg">
                        <Calculator size={24} />
                    </div>
                </div>
                
                <div className="mb-10">
                  <div className="flex justify-between text-sm mb-4 text-slate-400">
                    <span className="flex items-center gap-2"><Box size={14}/> Superficie Total</span>
                    <span className="text-white font-mono bg-white/10 px-2 py-1 rounded">{m2} m²</span>
                  </div>
                  <input 
                    type="range" 
                    min="40" 
                    max="300" 
                    step="1" 
                    value={m2} 
                    onChange={(e) => setM2(parseInt(e.target.value))} 
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 hover:accent-amber-400 transition-all" 
                  />
                  <div className="flex justify-between text-[10px] text-slate-600 mt-2 font-mono uppercase">
                    <span>40m²</span>
                    <span>300m²</span>
                  </div>
                </div>

                <div className="bg-black/40 rounded-2xl p-6 border border-white/5 mb-8 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-300 opacity-50" />
                    <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">Valor Llave en Mano (Ref.)</p>
                    <div className="text-3xl md:text-4xl font-mono text-white font-medium tracking-tighter">{formatCLP(totalPrice)}</div>
                    <p className="text-right text-[10px] text-slate-600 mt-2">*Valor referencial, sujeto a visita técnica</p>
                </div>

                <button onClick={() => openWhatsApp(`Hola, coticé ${m2}m2 en la web (${formatCLP(totalPrice)}). Quiero validar el presupuesto.`)} className="w-full py-4 bg-white text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:bg-slate-200 active:scale-95">
                  Validar Presupuesto <ChevronRight size={18} />
                </button>
              </motion.div>
            </div>

            {/* Desglose y FAQ */}
            <div className="lg:col-span-7">
              <div className="mb-12">
                  <h3 className="text-xl text-white font-serif mb-6 flex items-center gap-2">
                      <Award className="text-amber-500" /> Compromiso de Calidad
                  </h3>
                  <FAQItem 
                    question="¿El Metalcom dura menos que el ladrillo?" 
                    answer="Falso. El acero galvanizado tiene una vida útil superior a 300 años en condiciones normales. No se pudre, no se lo comen las termitas y no se quiebra con los sismos como el ladrillo." 
                  />
                  <FAQItem 
                    question="¿Quién supervisa la obra?" 
                    answer="Yo personalmente. No delego la supervisión crítica a capataces junior. Mi experiencia en todas las áreas (electricidad, gasfitería, etc.) asegura que nada se pase por alto." 
                  />
                  <FAQItem 
                    question="¿Forma de pago?" 
                    answer="Trabajamos por hitos de avance. No pagas el 100% por adelantado. Pagas a medida que ves tu casa construida. Esto garantiza tu seguridad financiera." 
                  />
              </div>

              <div className="bg-[#121214] rounded-2xl p-6 border border-white/5">
                <h3 className="text-sm text-slate-400 font-mono uppercase tracking-widest mb-6">Cronograma de Pagos</h3>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center text-xs font-bold">1</div>
                        <div className="flex-1">
                            <div className="text-white text-sm font-medium">Inicio & Radier (50%)</div>
                            <div className="text-xs text-slate-500">Compra de materiales gruesos y losa.</div>
                        </div>
                    </div>
                    <div className="w-0.5 h-4 bg-white/10 ml-4"></div>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-xs font-bold">2</div>
                        <div className="flex-1">
                            <div className="text-slate-300 text-sm">Estructura (20%)</div>
                        </div>
                    </div>
                    <div className="w-0.5 h-4 bg-white/10 ml-4"></div>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-xs font-bold">3</div>
                        <div className="flex-1">
                            <div className="text-slate-300 text-sm">Techo y Cierre (20%)</div>
                        </div>
                    </div>
                    <div className="w-0.5 h-4 bg-white/10 ml-4"></div>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-900/20 text-green-500 flex items-center justify-center text-xs font-bold"><Check size={12}/></div>
                        <div className="flex-1">
                            <div className="text-green-400 text-sm font-medium">Entrega Final (10%)</div>
                        </div>
                    </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#020202] py-20 border-t border-white/5 mb-16 md:mb-0">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
            ¿Construyes tu legado o <br/> solo una casa?
          </h2>
          <p className="text-slate-500 mb-10 max-w-xl mx-auto">
            Cupos limitados por semestre. Calidad sobre cantidad.
          </p>
          <button onClick={() => openWhatsApp()} className="bg-amber-500 text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-400 hover:scale-105 transition-all shadow-lg shadow-amber-500/20 mb-12 inline-flex items-center gap-2">
            <MessageCircle /> Agendar Visita Técnica
          </button>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-xs text-slate-600 border-t border-white/5 pt-8">
            <div>Santiago & V Región</div>
            <div>© 2025 Casas Fabrick SpA</div>
            <div>contacto@casasfabrick.cl</div>
          </div>
        </div>
      </footer>
    </div>
  );
}