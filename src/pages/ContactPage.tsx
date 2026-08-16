import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import { MessageSquare, FileText, Send, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [formType, setFormType] = useState<"query" | "quotation">("query");

  return (
    <div className="bg-[var(--color-brand-bg)] min-h-screen text-white pt-32">
      <div className="max-w-7xl mx-auto px-8 mb-32 flex flex-col lg:flex-row gap-16">
        
        {/* Left Info Column */}
        <div className="w-full lg:w-1/3">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-32"
          >
            <h1 className="text-[var(--color-brand-cyan)] text-sm font-bold uppercase tracking-[0.2em] mb-4">Get in Touch</h1>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">Secure Communications</h2>
            <p className="text-white/60 mb-12 leading-relaxed">
              For general inquiries, strategic partnerships, or formal RFQs (Request For Quotation), please utilize the secure channels below.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-brand-bg-sec)] flex items-center justify-center flex-shrink-0 border border-white/5">
                  <MapPin size={18} className="text-[var(--color-brand-cyan)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Global Headquarters</h4>
                  <p className="text-white/50 text-sm mt-1">Sector 7G, Naval Tech Park,<br/>Maritime District, 10091</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-brand-bg-sec)] flex items-center justify-center flex-shrink-0 border border-white/5">
                  <Phone size={18} className="text-[var(--color-brand-cyan)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Encrypted Line</h4>
                  <p className="text-white/50 text-sm mt-1">+1 (800) 555-NAVY</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-brand-bg-sec)] flex items-center justify-center flex-shrink-0 border border-white/5">
                  <Mail size={18} className="text-[var(--color-brand-cyan)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Direct Email</h4>
                  <p className="text-white/50 text-sm mt-1">comms@n39class.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Form Column */}
        <div className="w-full lg:w-2/3">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[var(--color-brand-bg-sec)] rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-brand-cyan)] to-transparent opacity-50" />
            
            {/* Toggle Switch */}
            <div className="flex bg-[var(--color-brand-bg)] p-1 rounded-xl w-full max-w-md mx-auto mb-12 relative border border-white/5">
              <button 
                onClick={() => setFormType("query")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition-all duration-300 z-10 font-semibold text-sm uppercase tracking-wider ${formType === "query" ? "text-white" : "text-white/40 hover:text-white/70"}`}
              >
                <MessageSquare size={16} /> Query
              </button>
              <button 
                onClick={() => setFormType("quotation")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition-all duration-300 z-10 font-semibold text-sm uppercase tracking-wider ${formType === "quotation" ? "text-white" : "text-white/40 hover:text-white/70"}`}
              >
                <FileText size={16} /> Quotation
              </button>
              
              {/* Sliding Background */}
              <motion.div 
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[var(--color-brand-cyan)]/20 border border-[var(--color-brand-cyan)]/30 rounded-lg z-0"
                initial={false}
                animate={{ 
                  left: formType === "query" ? "4px" : "calc(50%)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.form 
                key={formType}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Full Name / Rank</label>
                    <input type="text" className="w-full bg-[var(--color-brand-bg)] border border-white/5 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors placeholder:text-white/20" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Organization</label>
                    <input type="text" className="w-full bg-[var(--color-brand-bg)] border border-white/5 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors placeholder:text-white/20" placeholder="Gov / Corp" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Official Email</label>
                  <input type="email" className="w-full bg-[var(--color-brand-bg)] border border-white/5 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors placeholder:text-white/20" placeholder="john@domain.com" />
                </div>

                {formType === "quotation" && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    <div>
                      <label className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Platform of Interest</label>
                      <select className="w-full bg-[var(--color-brand-bg)] border border-white/5 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors appearance-none cursor-pointer">
                        <option>N-39 Destroyer</option>
                        <option>Coastal Patrol</option>
                        <option>Oceanic Survey</option>
                        <option>Components Only</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Estimated Quantity</label>
                      <input type="number" min="1" className="w-full bg-[var(--color-brand-bg)] border border-white/5 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors placeholder:text-white/20" placeholder="1" />
                    </div>
                  </motion.div>
                )}

                <div>
                  <label className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-2">{formType === 'query' ? 'Message' : 'Additional Specifications'}</label>
                  <textarea rows={5} className="w-full bg-[var(--color-brand-bg)] border border-white/5 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors placeholder:text-white/20 resize-none" placeholder="Enter details here..."></textarea>
                </div>
                
                <button type="submit" className="w-full group relative flex items-center justify-center gap-3 py-4 bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] font-bold uppercase tracking-widest border border-[var(--color-brand-cyan)]/30 rounded-lg cursor-pointer hover:bg-[var(--color-brand-cyan)] hover:text-black transition-all duration-300 mt-8 overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <Send size={18} className="relative z-10" />
                  <span className="relative z-10">Transmit Request</span>
                </button>
              </motion.form>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
