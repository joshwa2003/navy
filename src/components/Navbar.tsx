import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  // The navbar background becomes more opaque as the user scrolls down
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 12, 16, 0)", "rgba(10, 12, 16, 0.85)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ["1px solid rgba(255, 255, 255, 0)", "1px solid rgba(255, 255, 255, 0.05)"]
  );

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/product" },
    { name: "Components", path: "/components" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <motion.nav
        style={{
          backgroundColor: isHomePage ? backgroundColor : "rgba(10, 12, 16, 0.9)",
          backdropFilter: isHomePage ? backdropBlur : "blur(12px)",
          borderBottom: isHomePage ? borderBottom : "1px solid rgba(255, 255, 255, 0.05)",
          WebkitBackdropFilter: isHomePage ? backdropBlur : "blur(12px)",
        }}
        className="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between transition-all duration-300"
      >
        <div className="flex items-center">
          <Link 
            to="/" 
            className="text-white font-bold tracking-widest text-lg z-50"
          >
            N-39 CLASS
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/60">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`transition-colors hover:text-[var(--color-brand-cyan)] ${location.pathname === link.path ? 'text-[var(--color-brand-cyan)]' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6 z-50">
          <button className="text-white/60 hover:text-[var(--color-brand-cyan)] transition-colors cursor-pointer">
            <Search size={20} />
          </button>
          
          <Link 
            to="/contact" 
            className="relative px-5 py-2 text-sm font-semibold text-white overflow-hidden rounded-[2px] group cursor-pointer bg-transparent border-none hidden sm:block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-gunmetal)] to-[var(--color-brand-cyan)] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="absolute inset-0 border border-[var(--color-brand-cyan)]/40 group-hover:border-[var(--color-brand-cyan)] group-hover:shadow-[0_0_15px_rgba(0,224,214,0.3)] transition-all"></div>
            <span className="relative z-10 drop-shadow-md">Request Quote</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white hover:text-[var(--color-brand-cyan)] transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--color-brand-bg)]/95 backdrop-blur-xl md:hidden flex flex-col pt-32 px-8 pb-12"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-brand-cyan)]/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="flex-1 flex flex-col justify-center space-y-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    className={`text-3xl md:text-5xl font-light tracking-tight flex items-center justify-between group ${location.pathname === link.path ? 'text-[var(--color-brand-cyan)]' : 'text-white/70 hover:text-white'}`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight 
                      className={`opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 ${location.pathname === link.path ? 'opacity-100 text-[var(--color-brand-cyan)] translate-x-2' : 'text-white/30'}`} 
                    />
                  </Link>
                  <div className="h-[1px] w-full bg-white/5 mt-6" />
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative z-10 mt-auto"
            >
              <div className="text-[var(--color-brand-cyan)] text-xs font-mono uppercase tracking-widest mb-4">
                Secure Comms Link Active
              </div>
              <Link 
                to="/contact" 
                className="w-full py-4 bg-[var(--color-brand-cyan)] text-black font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 rounded hover:bg-white transition-colors"
              >
                Request Technical Dossier
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
