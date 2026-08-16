import { motion, MotionValue, useTransform } from "framer-motion";

interface StoryBeatsProps {
  scrollYProgress: MotionValue<number>;
}

export default function StoryBeats({ scrollYProgress }: StoryBeatsProps) {
  // Hero (0-15%)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1, 0.15], [1, 1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // Approach (15-35%)
  const approachOpacity = useTransform(scrollYProgress, [0.12, 0.2, 0.3, 0.35], [0, 1, 1, 0]);
  const approachY = useTransform(scrollYProgress, [0.12, 0.2], [50, 0]);

  // Command Center (35-60%)
  const commandOpacity = useTransform(scrollYProgress, [0.32, 0.4, 0.55, 0.6], [0, 1, 1, 0]);
  const commandY = useTransform(scrollYProgress, [0.32, 0.4], [50, 0]);

  // Systems & Propulsion (60-85%)
  const systemsOpacity = useTransform(scrollYProgress, [0.58, 0.65, 0.8, 0.85], [0, 1, 1, 0]);
  const systemsY = useTransform(scrollYProgress, [0.58, 0.65], [50, 0]);

  // Resolution & CTA (85-100%)
  const resolutionOpacity = useTransform(scrollYProgress, [0.82, 0.9, 1, 1], [0, 1, 1, 1]);
  const resolutionY = useTransform(scrollYProgress, [0.82, 0.9], [50, 0]);

  return (
    <div className="pointer-events-none absolute inset-0 w-full h-full">
      {/* 1. HERO / INTRO */}
      <motion.div 
        style={{ opacity: heroOpacity, y: heroY }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,18,32,0.4)_0%,rgba(10,12,16,0)_70%)]" />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            N-39 CLASS
          </h1>
          <p className="text-xl md:text-3xl text-[var(--color-brand-cyan)] mb-6 tracking-wide font-medium drop-shadow-lg">
            Command the horizon.
          </p>
          <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            A next-generation platform engineered for speed, precision, and presence at sea.
          </p>
        </div>
      </motion.div>

      {/* 2. APPROACH & THRESHOLD */}
      <motion.div 
        style={{ opacity: approachOpacity, y: approachY }}
        className="absolute inset-0 flex flex-col justify-center p-8 md:p-24"
      >
        <div className="max-w-xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#00E0D6]/50">
            Engineered from the hull inward.
          </h2>
          <div className="space-y-4 border-l border-[var(--color-brand-cyan)]/30 pl-6">
            <p className="text-lg text-white/70 leading-relaxed">
              Every surface, every weld, every system is built to perform under pressure.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Step aboard — precision starts before you're even inside.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 3. COMMAND CENTER */}
      <motion.div 
        style={{ opacity: commandOpacity, y: commandY }}
        className="absolute inset-0 flex flex-col justify-center items-end p-8 md:p-24 text-right"
      >
        <div className="max-w-xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#00E0D6]/50">
            Situational awareness, redefined.
          </h2>
          <div className="space-y-4 border-r border-[var(--color-brand-cyan)]/30 pr-6 flex flex-col items-end">
            <p className="text-lg text-white/70 leading-relaxed max-w-md">
              Integrated radar and sensor fusion in real time.
            </p>
            <p className="text-lg text-white/70 leading-relaxed max-w-md">
              Every console engineered for clarity under pressure.
            </p>
            <p className="text-lg text-white/70 leading-relaxed max-w-md text-[var(--color-brand-cyan)] font-medium">
              Command decisions, made with total visibility.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 4. SYSTEMS & PROPULSION */}
      <motion.div 
        style={{ opacity: systemsOpacity, y: systemsY }}
        className="absolute inset-0 flex flex-col justify-center p-8 md:p-24"
      >
        <div className="max-w-xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#FFB020]/50">
            Power built to endure.
          </h2>
          <div className="space-y-4 border-l border-[var(--color-brand-amber)]/30 pl-6">
            <p className="text-lg text-white/70 leading-relaxed">
              High-output propulsion systems deliver speed without compromise.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Redundant systems architecture keeps the mission running, no matter the conditions.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 5. RESOLUTION & CTA */}
      <motion.div 
        style={{ opacity: resolutionOpacity, y: resolutionY }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,18,32,0.6)_0%,rgba(10,12,16,0)_80%)]" />
        <div className="relative z-10 pointer-events-auto">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Built for the water.<br/>Ready for anything.
          </h2>
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            N-39 CLASS. Engineered for command, crafted for endurance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-[var(--color-brand-gunmetal)]/80 border border-[var(--color-brand-cyan)]/50 text-white font-semibold rounded-[2px] shadow-[0_0_20px_rgba(0,224,214,0.15)] hover:shadow-[0_0_30px_rgba(0,224,214,0.4)] hover:border-[var(--color-brand-cyan)] transition-all duration-300 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-cyan)]/0 via-[var(--color-brand-cyan)]/20 to-[var(--color-brand-cyan)]/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              Explore the Vessel
            </button>
            <button className="px-8 py-4 text-white/70 font-medium hover:text-white transition-colors relative after:absolute after:bottom-2 after:left-8 after:right-8 after:h-[1px] after:bg-[var(--color-brand-cyan)]/50 hover:after:bg-[var(--color-brand-cyan)] after:transition-colors cursor-pointer">
              View Full Specifications
            </button>
          </div>
          <p className="mt-8 text-xs text-white/30 tracking-widest uppercase font-mono">
            Deployed for the missions that matter most.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
