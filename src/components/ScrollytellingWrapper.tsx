import { useState, useRef } from "react";
import CanvasSequence from "./CanvasSequence";
import { useScroll, motion, useTransform, useMotionValueEvent } from "framer-motion";

export default function ScrollytellingWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress ONLY within this component's container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [isTitleVisible, setIsTitleVisible] = useState(true);

  // Fade out very quickly (between 0% and 5% of the scroll) 
  const titleOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.05], [0, -50]);

  // Completely unmount the text from the DOM once we pass 5% scroll
  // so it is mathematically impossible for it to faintly appear again!
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.05 && isTitleVisible) {
      setIsTitleVisible(false);
    } else if (latest <= 0.05 && !isTitleVisible) {
      setIsTitleVisible(true);
    }
  });

  return (
    <div ref={containerRef} className="relative h-[600vh] bg-[var(--color-brand-bg)] w-full">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <CanvasSequence scrollYProgress={scrollYProgress} />
        
        {/* Initial Hero Title - Unmounts completely to prevent faint ghosting */}
        {isTitleVisible && (
          <motion.div 
            style={{ opacity: titleOpacity, y: titleY }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,18,32,0.3)_0%,rgba(10,12,16,0)_60%)]" />
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white/90 to-white/50 drop-shadow-2xl">
              N-39 CLASS
            </h1>
            <p className="text-xl md:text-3xl text-[var(--color-brand-cyan)] tracking-[0.2em] font-medium drop-shadow-lg">
              COMMAND THE HORIZON
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
