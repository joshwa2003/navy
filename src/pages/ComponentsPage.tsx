import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Radar, Ship, ShieldAlert, Cpu, ArrowRight, Zap, Target } from "lucide-react";

const components = [
  {
    id: 1,
    name: "Quantum Radar Array",
    category: "Sensors & Surveillance",
    description: "Detects submerged and aerial anomalies at unprecedented distances with hyper-spectral fidelity. Eliminates blind spots through multi-band phased array technology.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
    icon: Radar,
    stats: [
      { label: "Range", value: "250 NM" },
      { label: "Precision", value: "< 0.1m" }
    ],
    colSpan: "lg:col-span-2"
  },
  {
    id: 2,
    name: "Hydro-Jet Propulsion",
    category: "Mobility & Stealth",
    description: "Silent, wake-reducing propulsion allowing for high-speed intercepts with minimal acoustic signature. Ideal for covert insertions.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    icon: Ship,
    stats: [
      { label: "Thrust", value: "45,000 hp" },
      { label: "Noise Reduct", value: "-40dB" }
    ],
    colSpan: "lg:col-span-1"
  },
  {
    id: 3,
    name: "Aegis Shielding",
    category: "Defense Systems",
    description: "Advanced composite armor with electromagnetic dispersal properties to counter modern ballistics, EMPs, and direct energy weapons.",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2000&auto=format&fit=crop",
    icon: ShieldAlert,
    stats: [
      { label: "Material", value: "Carbon-T" },
      { label: "EMP Resist", value: "Class 5" }
    ],
    colSpan: "lg:col-span-1"
  },
  {
    id: 4,
    name: "Command AI Core",
    category: "Navigation & Control",
    description: "Centralized intelligence hub providing predictive tactical analysis, automated threat response, and seamless drone swarm coordination.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    icon: Cpu,
    stats: [
      { label: "Processing", value: "120 PFLOPS" },
      { label: "Response", value: "< 2ms" }
    ],
    colSpan: "lg:col-span-2"
  }
];

export default function ComponentsPage() {
  return (
    <div className="bg-[var(--color-brand-bg)] min-h-screen text-white pt-32 overflow-hidden relative">
      {/* Background Decorators */}
      <div className="fixed top-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--color-brand-cyan)]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-cyan)]/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 mb-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-brand-cyan)]/30 bg-[var(--color-brand-cyan)]/5 mb-6">
            <span className="text-[var(--color-brand-cyan)]"><Zap size={14} /></span>
            <span className="text-[var(--color-brand-cyan)] text-xs font-bold uppercase tracking-[0.2em]">Precision Engineering</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight mb-8">Vessel Components</h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            The foundation of our maritime dominance. Explore the modular, state-of-the-art technologies that power the most advanced fleet on the planet.
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((comp, index) => (
            <motion.div 
              key={comp.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative rounded-3xl border border-white/10 bg-[var(--color-brand-bg-sec)] overflow-hidden hover:border-[var(--color-brand-cyan)]/40 transition-colors ${comp.colSpan}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={comp.image} 
                  alt={comp.name} 
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-bg-sec)] via-[var(--color-brand-bg-sec)]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-bg-sec)] via-transparent to-transparent" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-[var(--color-brand-cyan)]/20 group-hover:border-[var(--color-brand-cyan)]/50 transition-colors">
                      <comp.icon className="text-[var(--color-brand-cyan)]" size={24} />
                    </div>
                    <span className="px-3 py-1 bg-black/40 text-[var(--color-brand-cyan)] text-[10px] font-mono uppercase tracking-widest rounded border border-white/5">
                      {comp.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-[var(--color-brand-cyan)] transition-colors">{comp.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-md">
                    {comp.description}
                  </p>
                </div>
                
                {/* Tech Stats Bottom Bar */}
                <div className="mt-12 flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex gap-8">
                    {comp.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">{stat.label}</div>
                        <div className="font-mono text-white text-sm">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[var(--color-brand-cyan)] group-hover:border-[var(--color-brand-cyan)] group-hover:text-black transition-all">
                    <Target size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Integration Call to Action Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-3xl border border-[var(--color-brand-cyan)]/30 bg-gradient-to-br from-[var(--color-brand-cyan)]/10 to-transparent p-12 text-center relative overflow-hidden group mt-8"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand-cyan)] to-transparent opacity-50" />
            <h3 className="text-3xl font-bold mb-4 text-white">Need Custom Integration?</h3>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Our engineering teams can adapt these core components to fit custom vessel specifications or upgrade existing maritime assets.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-brand-cyan)] text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-colors"
            >
              Contact Engineering Division
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
