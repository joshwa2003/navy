import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { ShieldAlert, Crosshair, Waves, Zap, Anchor, Globe, Cpu, Target, ShieldCheck, Factory, Award } from "lucide-react";

const timelineEvents = [
  {
    year: "1995",
    title: "Foundation of N-39 Engineering",
    description: "Established with a singular focus on revolutionizing naval architecture. The founding team, comprised of ex-naval intelligence and aerospace engineers, set out to merge stealth tech with deep-sea endurance.",
    icon: Anchor
  },
  {
    year: "2001",
    title: "The Phantom Hull Breakthrough",
    description: "Successfully patented the first iteration of radar-absorbent hull plating, reducing the radar cross-section of test vessels by 80% compared to standard military alloys.",
    icon: ShieldAlert
  },
  {
    year: "2008",
    title: "Project 'Abyss' Initiated",
    description: "The secret development phase of the hyper-spectral sonar systems and the Aegis Shielding system began, funded by a coalition of allied defense ministries.",
    icon: Waves
  },
  {
    year: "2015",
    title: "First Prototype Sea Trials",
    description: "The N-39 alpha prototype successfully deployed in Category 5 hurricane conditions in the North Atlantic. The vessel maintained 100% operational capacity, proving the resilience of the new hull architecture.",
    icon: Crosshair
  },
  {
    year: "2019",
    title: "Aegis AI Integration",
    description: "Shifted from manual command centers to the centralized Command AI Core, enabling predictive tactical analysis and automated drone swarm coordination.",
    icon: Cpu
  },
  {
    year: "2024",
    title: "Global Fleet Integration",
    description: "Official adoption of the N-39 Destroyer and Coastal Patrol platforms by three major allied navies, establishing a new global standard for maritime defense.",
    icon: Zap
  },
  {
    year: "2026",
    title: "Expansion to Orbital/Sea Relays",
    description: "Launched the next phase of R&D focused on seamlessly connecting deep-sea naval assets with low-earth orbit satellite grids for unjammable communications.",
    icon: Globe
  }
];

const leadership = [
  {
    name: "Adm. Sarah Jenkins (Ret.)",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Dr. Marcus Vance",
    role: "Head of Naval Architecture",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Elena Rostova",
    role: "Director of AI Systems",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
  }
];

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-brand-bg)] min-h-screen text-white pt-32 overflow-hidden relative">
      {/* Background Decorators */}
      <div className="fixed top-0 left-1/4 w-[800px] h-[800px] bg-[var(--color-brand-cyan)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-8 mb-32 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-brand-cyan)]/30 bg-[var(--color-brand-cyan)]/5 mb-6">
            <span className="text-[var(--color-brand-cyan)] text-xs font-bold uppercase tracking-[0.2em]">Our Legacy</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight mb-8">Forged in the Deep</h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
            For three decades, we have pushed the boundaries of maritime engineering. We don't just build ships; we engineer dominance. Our platforms secure borders, protect global trade routes, and ensure absolute tactical superiority in any theater of operation.
          </p>
        </motion.div>

        {/* Corporate Scale Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-40 border-y border-white/5 py-12 bg-black/20 rounded-3xl">
          {[
            { value: "30+", label: "Years Active" },
            { value: "$4.2B", label: "R&D Invested" },
            { value: "15,000", label: "Engineers Globally" },
            { value: "0", label: "Hull Compromises" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-[var(--color-brand-cyan)] text-xs uppercase tracking-widest font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Core Operating Principles */}
        <div className="mb-40">
          <div className="text-center mb-16">
            <h2 className="text-[var(--color-brand-cyan)] text-sm font-bold uppercase tracking-[0.2em] mb-4">Core Philosophy</h2>
            <h3 className="text-4xl font-light text-white">Operating Principles</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Absolute Precision", desc: "Every component, from the hull plating to the quantum radar arrays, is engineered with zero tolerance for error." },
              { icon: ShieldCheck, title: "Unyielding Resilience", desc: "Our platforms are designed to operate in the most hostile environments on Earth, guaranteeing survivability." },
              { icon: Crosshair, title: "Strategic Superiority", desc: "We provide our allies with an undeniable tactical advantage, shifting the balance of maritime power." }
            ].map((principle, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-[var(--color-brand-bg-sec)] border border-white/5 p-10 rounded-2xl hover:border-[var(--color-brand-cyan)]/30 transition-colors group"
              >
                <principle.icon className="text-[var(--color-brand-cyan)] mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h4 className="text-2xl font-bold mb-4 text-white">{principle.title}</h4>
                <p className="text-white/50 leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-white">The Evolution of Dominance</h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[var(--color-brand-cyan)]/30 to-transparent md:-translate-x-1/2" />
          
          <div className="space-y-32 relative">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={event.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}
              >
                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'} pt-2`}>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] border border-[var(--color-brand-cyan)]/30 rounded-full font-bold tracking-widest text-lg shadow-[0_0_15px_rgba(0,224,214,0.1)] group-hover:bg-[var(--color-brand-cyan)] group-hover:text-black transition-colors">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-[var(--color-brand-cyan)] transition-colors">{event.title}</h3>
                  <p className="text-white/50 leading-relaxed text-lg">{event.description}</p>
                </div>
                
                {/* Animated Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-20 h-20 rounded-full bg-[var(--color-brand-bg)] border border-white/10 flex items-center justify-center z-10 group-hover:border-[var(--color-brand-cyan)] group-hover:shadow-[0_0_30px_rgba(0,224,214,0.4)] transition-all duration-500">
                  <div className="absolute inset-2 rounded-full bg-[var(--color-brand-bg-sec)] flex items-center justify-center">
                    <event.icon className="text-[var(--color-brand-cyan)]/50 group-hover:text-[var(--color-brand-cyan)] transition-colors" size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Manufacturing & Facilities */}
      <section className="py-32 relative overflow-hidden bg-black mb-32 border-y border-white/10">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1565347879483-e02d8471e80b?q=80&w=2000&auto=format&fit=crop" 
            alt="The Leviathan Drydocks"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-bg)] via-[var(--color-brand-bg)]/80 to-transparent" />
        </div>
        
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-500 text-xs font-mono uppercase tracking-widest">Facility Status: Fully Operational</span>
            </div>
            
            <h2 className="text-[var(--color-brand-cyan)] text-sm font-bold uppercase tracking-[0.2em] mb-4">Manufacturing Excellence</h2>
            <h3 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">The Leviathan Drydocks</h3>
            
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Spanning over 500 acres, our automated manufacturing facility is the largest classified shipyard in the world. Utilizing a combination of AI-driven assembly nodes and heavy-lift robotics, we can construct an N-39 Destroyer from raw materials to sea trials in under 18 months.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-white/20 pt-8">
              <div>
                <Factory className="text-[var(--color-brand-cyan)] mb-3" size={24} />
                <div className="text-2xl font-bold text-white mb-1">4</div>
                <div className="text-white/40 text-xs uppercase tracking-widest">Active Assembly Bays</div>
              </div>
              <div>
                <Cpu className="text-[var(--color-brand-cyan)] mb-3" size={24} />
                <div className="text-2xl font-bold text-white mb-1">85%</div>
                <div className="text-white/40 text-xs uppercase tracking-widest">Automated Construction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 bg-[var(--color-brand-bg-sec)] border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-[var(--color-brand-cyan)] text-sm font-bold uppercase tracking-[0.2em] mb-4">Command Structure</h2>
            <h3 className="text-4xl md:text-5xl font-light text-white">Board of Directors</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-bg-sec)] via-transparent to-transparent opacity-80" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{leader.name}</h4>
                <p className="text-[var(--color-brand-cyan)] text-sm uppercase tracking-widest font-semibold">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Certifications */}
      <section className="py-20 bg-[var(--color-brand-bg)] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-12">Global Defense Certifications</h2>
          
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50">
            <div className="flex flex-col items-center gap-3">
              <Award size={32} />
              <div className="text-xs font-mono tracking-widest">NATO LEVEL-5</div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ShieldCheck size={32} />
              <div className="text-xs font-mono tracking-widest">ISO-9001: DEFENSE</div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Anchor size={32} />
              <div className="text-xs font-mono tracking-widest">GLOBAL MARITIME std.</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
