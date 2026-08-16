import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  // The navbar background becomes more opaque as the user scrolls down
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 12, 16, 0)", "rgba(10, 12, 16, 0.75)"]
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

  return (
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
          className="text-white font-bold tracking-widest text-lg"
        >
          N-39 CLASS
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/60">
        <Link to="/" className="hover:text-[var(--color-brand-cyan)] transition-colors">Home</Link>
        <Link to="/product" className="hover:text-[var(--color-brand-cyan)] transition-colors">Products</Link>
        <Link to="/components" className="hover:text-[var(--color-brand-cyan)] transition-colors">Components</Link>
        <Link to="/about" className="hover:text-[var(--color-brand-cyan)] transition-colors">About</Link>
        <Link to="/contact" className="hover:text-[var(--color-brand-cyan)] transition-colors">Contact</Link>
      </div>

      <div className="flex items-center space-x-6">
        <button className="text-white/60 hover:text-white transition-colors cursor-pointer">
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
      </div>
    </motion.nav>
  );
}
