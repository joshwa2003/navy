import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Anchor, Crosshair, Navigation, Zap, Shield, Waves, Wind } from "lucide-react";

const products = [
  {
    id: 1,
    name: "N-39 Destroyer",
    subtitle: "Primary Combat Platform",
    class: "Alpha Class",
    description: "The apex of naval engineering. Equipped with next-generation stealth capabilities, advanced radar systems, and long-range interception technology, the N-39 Destroyer is built to establish undisputed maritime superiority in any theater of war.",
    image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=2000&auto=format&fit=crop",
    specs: [
      { label: "Top Speed", value: "45 Knots", icon: Zap },
      { label: "Displacement", value: "8,500 Tons", icon: Anchor },
      { label: "Operational Range", value: "5,000 NM", icon: Navigation },
      { label: "Primary Armament", value: "Railgun Sys", icon: Crosshair },
    ],
    highlights: [
      "Radar-Absorbent Hull Coating",
      "Integrated Aegis AI Combat System",
      "VTOL Drone Deck Support"
    ]
  },
  {
    id: 2,
    name: "Coastal Patrol",
    subtitle: "Rapid Intercept Vessel",
    class: "Beta Class",
    description: "Designed for high-speed coastal defense and intercept missions. Agile, heavily armed, and capable of operating in shallow waters where larger destroyers cannot navigate. Built for rapid deployment and border security.",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2000&auto=format&fit=crop",
    specs: [
      { label: "Top Speed", value: "60 Knots", icon: Zap },
      { label: "Displacement", value: "400 Tons", icon: Anchor },
      { label: "Operational Range", value: "1,500 NM", icon: Navigation },
      { label: "Armor", value: "Composite", icon: Shield },
    ],
    highlights: [
      "Jet-Drive Propulsion",
      "Shallow Draft Design",
      "Modular Weapon Mounts"
    ]
  },
  {
    id: 3,
    name: "Oceanic Survey",
    subtitle: "Deep Sea Research Vessel",
    class: "Gamma Class",
    description: "Built for extreme endurance and stability in the harshest oceanic conditions. Outfitted with deep-sea sonar arrays, geological sampling drills, and extended life-support systems for month-long research and reconnaissance expeditions.",
    image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2000&auto=format&fit=crop",
    specs: [
      { label: "Endurance", value: "60 Days", icon: Waves },
      { label: "Displacement", value: "12,000 Tons", icon: Anchor },
      { label: "Ice Class", value: "Polar Class 2", icon: Wind },
      { label: "Sonar Suite", value: "Ultra-Deep", icon: Navigation },
    ],
    highlights: [
      "Moonpool for Submersibles",
      "Dynamic Positioning System",
      "Advanced Meteorological Labs"
    ]
  }
];

export default function ProductPage() {
  return (
    <div className="bg-[var(--color-brand-bg)] min-h-screen text-white pt-32 overflow-hidden relative">
      {/* Background Decorators */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-[var(--color-brand-cyan)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 mb-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-brand-cyan)]/30 bg-[var(--color-brand-cyan)]/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-cyan)] animate-pulse" />
            <span className="text-[var(--color-brand-cyan)] text-xs font-bold uppercase tracking-[0.2em]">Naval Engineering</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight mb-8">The Active Fleet</h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our lineup of next-generation maritime platforms, engineered for unparalleled dominance, resilience, and operational efficiency.
          </p>
        </motion.div>

        <div className="space-y-40">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Connector Line between sections */}
              {index !== products.length - 1 && (
                <div className="absolute left-1/2 bottom-[-10rem] w-[1px] h-32 bg-gradient-to-b from-white/20 to-transparent hidden lg:block" />
              )}
              
              <div className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
                
                {/* Image Section */}
                <div className="w-full lg:w-[55%] relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-brand-cyan)]/20 to-blue-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    
                    {/* Floating Tech Data */}
                    <div className="absolute top-6 left-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-20px] group-hover:translate-x-0">
                      <div className="bg-black/50 backdrop-blur-md border border-[var(--color-brand-cyan)]/30 px-3 py-1 rounded text-xs font-mono text-[var(--color-brand-cyan)]">
                        STATUS: ACTIVE
                      </div>
                      <div className="bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-xs font-mono text-white/70">
                        {product.class}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="w-full lg:w-[45%] space-y-8">
                  <div>
                    <h2 className="text-5xl font-bold mb-4 tracking-tight">{product.name}</h2>
                    <p className="text-[var(--color-brand-cyan)] text-sm uppercase tracking-[0.2em] font-semibold">{product.subtitle}</p>
                  </div>
                  
                  <p className="text-white/60 text-lg leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Specs Bento Box */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-4 hover:border-[var(--color-brand-cyan)]/30 transition-colors group/spec">
                        <spec.icon size={18} className="text-white/40 mb-3 group-hover/spec:text-[var(--color-brand-cyan)] transition-colors" />
                        <div className="text-white/40 text-xs uppercase tracking-widest mb-1">{spec.label}</div>
                        <div className="font-mono text-lg text-white font-semibold">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Highlights */}
                  <div className="pt-4 border-t border-white/10">
                    <ul className="space-y-3">
                      {product.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-cyan)]" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-8">
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] border border-[var(--color-brand-cyan)]/30 hover:bg-[var(--color-brand-cyan)] hover:text-black transition-all duration-300 font-bold uppercase tracking-widest text-xs rounded-full group/btn"
                    >
                      Request Technical Dossier
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Inline ArrowRight component since it wasn't imported from lucide-react initially
function ArrowRight({ size = 24, className = "" }: { size?: number, className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
