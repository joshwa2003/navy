import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Anchor, Shield, Navigation, Crosshair, Zap, Activity, Globe, Fingerprint, Database, Hexagon, Satellite, Compass } from "lucide-react";
import ScrollytellingWrapper from "../components/ScrollytellingWrapper";
import Footer from "../components/Footer";
import { useState } from "react";

const faqData = [
  {
    question: "What makes the N-39 Class superior to conventional vessels?",
    answer: "The N-39 Class integrates state-of-the-art AI-driven navigation and combat systems, wrapped in a radar-absorbent hull. It offers 40% more fuel efficiency and double the operational range of standard destroyers."
  },
  {
    question: "Are your platforms customizable for specific coast guard needs?",
    answer: "Absolutely. Our modular design philosophy allows rapid reconfiguration of deck space, sensor suites, and interception capabilities tailored to coastal defense requirements."
  },
  {
    question: "What is the typical delivery timeline for a new vessel?",
    answer: "Depending on the platform and customization level, delivery timelines range from 18 to 36 months, leveraging our advanced modular construction techniques."
  }
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <main className="bg-[var(--color-brand-bg)] text-white relative">
      <ScrollytellingWrapper />
      
      {/* 3. Count Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-brand-cyan)]/5 to-transparent z-0" />
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { number: "50+", label: "Vessels Deployed", icon: Anchor },
              { number: "200+", label: "Knots Top Speed", icon: Zap },
              { number: "99.9%", label: "Uptime Reliability", icon: Activity },
              { number: "24/7", label: "Global Support", highlight: true, icon: Crosshair }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-default flex flex-col items-center"
              >
                <div className={`mb-6 p-4 rounded-full border border-white/5 bg-[var(--color-brand-bg-sec)] group-hover:border-[var(--color-brand-cyan)]/30 transition-colors`}>
                  <stat.icon size={24} className={stat.highlight ? "text-[var(--color-brand-cyan)]" : "text-white/60"} />
                </div>
                <div className={`text-5xl md:text-6xl font-black mb-4 tracking-tighter ${stat.highlight ? "text-[var(--color-brand-cyan)] drop-shadow-[0_0_20px_rgba(0,224,214,0.4)]" : "text-white"}`}>
                  {stat.number}
                </div>
                <div className="text-white/40 text-xs uppercase tracking-[0.3em] font-semibold group-hover:text-white/80 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Product Section (Naval Platforms) */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-brand-cyan)]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-cyan)]/10 to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-brand-cyan)]/30 bg-[var(--color-brand-cyan)]/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-cyan)] animate-pulse" />
              <span className="text-[var(--color-brand-cyan)] text-xs font-bold uppercase tracking-[0.2em]">Core Fleet</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-light text-white tracking-tight">Naval Platforms</h3>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Card 1 */}
            <Link to="/product" className="group block h-full">
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm"
              >
                <img 
                  src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=2000&auto=format&fit=crop" 
                  alt="N-39 Destroyer" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                
                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-bg)] via-[var(--color-brand-bg)]/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-bg)]/80 via-transparent to-transparent z-10" />
                
                {/* Card Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-between z-20">
                  <div className="flex justify-between items-start">
                    <div className="px-4 py-2 bg-white/5 backdrop-blur-md rounded border border-white/10 text-xs font-mono uppercase tracking-widest text-[var(--color-brand-cyan)]">
                      Class: Alpha
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[var(--color-brand-cyan)] group-hover:border-[var(--color-brand-cyan)] group-hover:text-black transition-all">
                      <ChevronDown className="-rotate-90" />
                    </div>
                  </div>
                  
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-wide">N-39 Destroyer</h3>
                    <p className="text-[var(--color-brand-cyan)] mb-8 font-medium tracking-wide text-lg">Primary Combat Platform</p>
                    
                    {/* Technical Specs Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 border-t border-white/10 pt-6">
                      <div>
                        <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Max Speed</div>
                        <div className="font-mono text-lg text-white">45 Knots</div>
                      </div>
                      <div>
                        <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Displacement</div>
                        <div className="font-mono text-lg text-white">8,500 Tons</div>
                      </div>
                      <div>
                        <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Range</div>
                        <div className="font-mono text-lg text-white">5,000 NM</div>
                      </div>
                      <div>
                        <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Crew</div>
                        <div className="font-mono text-lg text-white">120 Core</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Product Card 2 */}
            <Link to="/product" className="group block h-full">
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm"
              >
                <img 
                  src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2000&auto=format&fit=crop" 
                  alt="Coastal Patrol" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                
                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-bg)] via-[var(--color-brand-bg)]/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-bg)]/80 via-transparent to-transparent z-10" />
                
                {/* Card Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-between z-20">
                  <div className="flex justify-between items-start">
                    <div className="px-4 py-2 bg-white/5 backdrop-blur-md rounded border border-white/10 text-xs font-mono uppercase tracking-widest text-[var(--color-brand-amber)]">
                      Class: Beta
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[var(--color-brand-amber)] group-hover:border-[var(--color-brand-amber)] group-hover:text-black transition-all">
                      <ChevronDown className="-rotate-90" />
                    </div>
                  </div>
                  
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-wide">Coastal Patrol</h3>
                    <p className="text-[var(--color-brand-amber)] mb-8 font-medium tracking-wide text-lg">Rapid Intercept Vessel</p>
                    
                    {/* Technical Specs Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 border-t border-white/10 pt-6">
                      <div>
                        <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Max Speed</div>
                        <div className="font-mono text-lg text-white">60 Knots</div>
                      </div>
                      <div>
                        <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Displacement</div>
                        <div className="font-mono text-lg text-white">400 Tons</div>
                      </div>
                      <div>
                        <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Range</div>
                        <div className="font-mono text-lg text-white">1,500 NM</div>
                      </div>
                      <div>
                        <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Crew</div>
                        <div className="font-mono text-lg text-white">15 Core</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: Technological Innovations */}
      <section className="py-32 relative overflow-hidden bg-black/20 border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,224,214,0.05),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[var(--color-brand-cyan)] text-sm font-bold uppercase tracking-[0.2em] mb-4">Research & Development</h2>
            <h3 className="text-4xl md:text-5xl font-light text-white tracking-tight">Technological Innovations</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Database, title: "Quantum Sonar Processing", desc: "Real-time acoustic analysis leveraging quantum-state processing to eliminate background ocean noise." },
              { icon: Hexagon, title: "Next-Gen Stealth Armor", desc: "Meta-materials capable of active radar cross-section modulation and infrared suppression." },
              { icon: Satellite, title: "Aegis Swarm AI", desc: "Automated coordination of hundreds of subsurface and aerial drones acting as a single unified entity." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[var(--color-brand-cyan)]/30 transition-all group cursor-pointer"
              >
                <item.icon className="text-[var(--color-brand-cyan)] mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Mission & Vision */}
      <section className="py-40 relative overflow-hidden bg-[var(--color-brand-bg-sec)]">
        {/* Dynamic Anchor Background */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          <Anchor size={900} className="text-[var(--color-brand-cyan)] drop-shadow-[0_0_50px_rgba(0,224,214,0.5)]" strokeWidth={0.5} />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-bg-sec)] via-transparent to-[var(--color-brand-bg-sec)] z-0" />
        
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[var(--color-brand-cyan)] text-sm font-bold uppercase tracking-[0.2em] mb-8">Our Mission & Vision</h2>
            <p className="text-4xl md:text-6xl font-light text-white leading-tight mb-12">
              To engineer <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-cyan)] to-blue-500">maritime dominance</span> through precision, resilience, and unyielding innovation.
            </p>
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand-cyan)] to-transparent mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* 6. Target Industries */}
      <section className="py-32 bg-[var(--color-brand-bg)] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">Target Industries</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">Providing unmatched naval capabilities across multiple critical sectors.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Defense & Military", desc: "Advanced combat systems and stealth capabilities for sovereign protection. Integrated with next-gen Aegis systems." },
              { icon: Anchor, title: "Coast Guard", desc: "Rapid response and search & rescue platforms with extended endurance for uncompromised border security." },
              { icon: Navigation, title: "Research & Survey", desc: "Stable, high-tech platforms for oceanographic, geological, and deep-sea exploration missions." }
            ].map((industry, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-[var(--color-brand-bg-sec)] p-12 rounded-3xl border border-white/5 hover:border-[var(--color-brand-cyan)]/30 hover:shadow-[0_0_30px_rgba(0,224,214,0.05)] transition-all group"
              >
                <div className="w-20 h-20 rounded-2xl bg-[var(--color-brand-bg)] border border-white/5 flex items-center justify-center mb-8 group-hover:bg-[var(--color-brand-cyan)]/10 group-hover:border-[var(--color-brand-cyan)]/30 transition-all">
                  <industry.icon className="text-white group-hover:text-[var(--color-brand-cyan)] transition-colors" size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Global Operations & Reach */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-[var(--color-brand-cyan)] text-sm font-bold uppercase tracking-[0.2em] mb-4">Global Reach</h2>
              <h3 className="text-4xl md:text-5xl font-light text-white mb-6">Securing the World's Oceans</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                With over 50 active deployments, our platforms secure critical maritime chokepoints and project power across four major oceans. We provide allied nations with the tactical edge necessary to maintain global stability.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">12+</div>
                  <div className="text-[var(--color-brand-cyan)] text-xs uppercase tracking-widest">Allied Navies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">4</div>
                  <div className="text-[var(--color-brand-cyan)] text-xs uppercase tracking-widest">Major Oceans</div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              {/* Abstract Map Graphic */}
              <div className="relative aspect-square rounded-full border border-white/10 bg-[var(--color-brand-bg-sec)] flex items-center justify-center overflow-hidden">
                <Globe size={400} className="text-[var(--color-brand-cyan)]/20 animate-[spin_60s_linear_infinite]" strokeWidth={0.5} />
                {/* Ping locations */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[var(--color-brand-cyan)] rounded-full animate-ping" />
                <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[var(--color-brand-cyan)] rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-[var(--color-brand-cyan)] rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-32 max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <div 
              key={i} 
              className="border border-white/5 rounded-2xl bg-[var(--color-brand-bg-sec)]/80 backdrop-blur overflow-hidden transition-colors hover:border-white/10"
            >
              <button 
                className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`text-[var(--color-brand-cyan)] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-white/50 leading-relaxed pt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Strategic Partnerships */}
      <section className="py-24 bg-black/40 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 text-center mb-12">
          <h2 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">Trusted by Global Defense Coalitions</h2>
        </div>
        
        {/* Infinite scrolling marquee */}
        <div className="relative w-full overflow-hidden flex">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--color-brand-bg)] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--color-brand-bg)] to-transparent z-10" />
          
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex gap-24 items-center whitespace-nowrap opacity-40 px-12"
          >
            {[1, 2, 3].map((set) => (
              <div key={set} className="flex gap-24 items-center">
                <div className="flex items-center gap-3 font-bold tracking-widest text-xl"><Compass /> NATO COMMAND</div>
                <div className="flex items-center gap-3 font-bold tracking-widest text-xl"><Shield /> PACIFIC FLEET</div>
                <div className="flex items-center gap-3 font-bold tracking-widest text-xl"><Fingerprint /> DARPA</div>
                <div className="flex items-center gap-3 font-bold tracking-widest text-xl"><Anchor /> COAST GUARD</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. YouTube Video Section */}
      <section className="py-32 px-8 relative overflow-hidden bg-[#05070A]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-brand-cyan)]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-[var(--color-brand-cyan)] text-sm font-bold uppercase tracking-[0.2em] mb-4">See It In Action</h2>
          <h3 className="text-4xl md:text-6xl font-light text-white mb-16 tracking-tight">Unleashing Maritime Power</h3>
          
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-black">
            {isVideoPlaying ? (
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" 
                title="Naval Showcase" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            ) : (
              <div 
                className="absolute inset-0 group cursor-pointer"
                onClick={() => setIsVideoPlaying(true)}
              >
                {/* Premium Ship Thumbnail */}
                <img 
                  src="https://images.unsplash.com/photo-1543364195-077a16c30ff3?q=80&w=2000&auto=format&fit=crop" 
                  alt="Video Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-24 h-24 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:border-[var(--color-brand-cyan)]/80 transition-all duration-300">
                    <div className="absolute inset-0 rounded-full bg-[var(--color-brand-cyan)]/20 animate-ping opacity-0 group-hover:opacity-100" />
                    <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-white group-hover:border-l-[var(--color-brand-cyan)] border-b-[14px] border-b-transparent ml-2 transition-colors" />
                  </div>
                </div>
                
                {/* Info Text */}
                <div className="absolute bottom-10 left-10 text-left">
                  <div className="text-white font-bold text-2xl tracking-wide mb-2">Classified Sea Trials</div>
                  <div className="flex items-center gap-4 text-sm font-mono text-[var(--color-brand-cyan)] uppercase">
                    <span>Duration: 02:45</span>
                    <span className="w-1 h-1 rounded-full bg-white/50" />
                    <span>Location: Pacific Theater</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
