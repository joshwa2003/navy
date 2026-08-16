import { useEffect, useRef, useState } from "react";
import { MotionValue, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";

const FRAME_COUNT = 240;

function getFrameSrc(index: number): string {
  const clamped = Math.max(1, Math.min(FRAME_COUNT, index));
  return `/hero-sequence/ezgif-frame-${clamped.toString().padStart(3, "0")}.jpg`;
}

interface CanvasSequenceProps {
  scrollYProgress: MotionValue<number>;
}

export default function CanvasSequence({ scrollYProgress }: CanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastDrawnIndex = useRef<number>(-1);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // Preload and DECODE all 240 images into browser memory.
  // Using .decode() prevents the browser from decoding on-the-fly during scrolling,
  // which is the #1 cause of "flickering" or stuttering in canvas scrollytelling.
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      
      // Force decode into memory
      img.decode().then(() => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        
        // Draw the very first frame as soon as it's ready
        if (i === 1) {
          renderFrame(0, loadedImages);
        }
      }).catch((e) => {
        console.warn("Decode failed for frame", i, e);
        // Still count it so we don't get stuck loading
        loadedCount++;
        setImagesLoaded(loadedCount);
      });
      
      loadedImages.push(img);
    }
    
    imagesRef.current = loadedImages;
  }, []);

  const renderFrame = (index: number, imageArray = imagesRef.current) => {
    if (!canvasRef.current || imageArray.length === 0) return;
    
    // Don't redraw if we are already on this frame (saves performance)
    if (lastDrawnIndex.current === index) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false }); // Optimize for no transparency
    if (!ctx) return;

    const img = imageArray[index];
    // Only draw if the image has successfully decoded
    if (img && img.complete) {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      lastDrawnIndex.current = index;
    }
  };

  // Sync the canvas drawing with Framer Motion's scroll progress.
  // Note: We removed 'useSpring' because Lenis is ALREADY smoothing the scroll. 
  // Double-smoothing causes them to fight and creates stuttering!
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progress = Math.max(0, Math.min(1, latest));
    const frameIndex = Math.floor(progress * (FRAME_COUNT - 1));
    
    // We use requestAnimationFrame here to ensure we only paint right before the monitor refreshes,
    // which prevents screen tearing/flickering.
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    // Ensure the awesome boot sequence plays for a brief moment, but not too long
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const isBooting = imagesLoaded < FRAME_COUNT || !minTimeElapsed;

  useEffect(() => {
    if (isBooting) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isBooting]);

  return (
    <>
      {/* Full-screen Loading Overlay - Tactical Navy Theme */}
      <AnimatePresence>
        {isBooting && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center overflow-hidden font-mono"
          >
            <div className="relative z-10 w-full max-w-2xl px-8 flex flex-col items-center">
              {/* Radar/Lock Icon */}
              <div className="relative w-32 h-32 mb-12 flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-[var(--color-brand-cyan)]/30"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-[var(--color-brand-cyan)]/50 border-t-transparent"
                />
                <div className="w-2 h-2 bg-[var(--color-brand-cyan)] rounded-full animate-pulse shadow-[0_0_15px_rgba(0,224,214,1)]" />
              </div>

              {/* Progress Bar */}
              <div className="w-full mb-6">
                <div className="flex justify-between text-[var(--color-brand-cyan)] text-xs mb-2 tracking-widest opacity-70">
                  <span>SYSTEM.BOOTUP</span>
                  <span>{Math.round((imagesLoaded / FRAME_COUNT) * 100)}%</span>
                </div>
                <div className="h-[2px] w-full bg-[var(--color-brand-cyan)]/20 relative">
                  <motion.div 
                    className="absolute top-0 left-0 bottom-0 bg-[var(--color-brand-cyan)] shadow-[0_0_10px_rgba(0,224,214,0.8)]"
                    style={{ width: `${(imagesLoaded / FRAME_COUNT) * 100}%` }}
                    layout
                  />
                </div>
              </div>

              {/* Terminal Logs */}
              <div className="w-full space-y-2 text-[var(--color-brand-cyan)]/50 text-xs tracking-widest text-left">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>{`>`} ESTABLISHING UPLINK...</motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: imagesLoaded > 20 ? 1 : 0 }}>{`>`} DECRYPTING N-39 PROTOCOLS...</motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: imagesLoaded > 80 ? 1 : 0 }}>{`>`} LOADING COMBAT SCHEMATICS...</motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: imagesLoaded > 160 ? 1 : 0 }}>{`>`} AEGIS SYSTEMS ONLINE.</motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full h-full relative overflow-hidden bg-[#0A0C10]">
        {/* 
          We use a high-res canvas (1920x1080 native resolution) scaled down by CSS.
          This provides perfect hardware-accelerated drawing.
        */}
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </>
  );
}
