import { motion } from "framer-motion";

type Props = {
  size?: number;
  showWordmark?: boolean;
  animate?: boolean;
  className?: string;
};

export default function TruhubLogo({
  size = 160,
  showWordmark = false,
  animate = true,
  className = "",
}: Props) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.25, duration: 1.1, ease: "easeInOut" },
        opacity: { delay: i * 0.25, duration: 0.3 },
      },
    }),
  };

  return (
    <div
      className={`inline-flex flex-col items-center ${className}`}
      style={{ width: size }}
    >
      <motion.svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        initial={animate ? "hidden" : "visible"}
        animate="visible"
        className="drop-shadow-[0_0_25px_rgba(0,212,255,0.45)]"
      >
        <defs>
          <linearGradient id="thGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7DE8FF" />
            <stop offset="50%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#0077A8" />
          </linearGradient>
          <radialGradient id="thGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,212,255,0.35)" />
            <stop offset="70%" stopColor="rgba(0,212,255,0)" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="100" r="95" fill="url(#thGlow)" />

        {/* Outer arc ring */}
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="url(#thGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="360 140"
          transform="rotate(-40 100 100)"
          variants={draw}
          custom={0}
        />

        {/* T letter — horizontal bar + stem */}
        <motion.path
          d="M 55 78 H 105"
          stroke="#FFFFFF"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          variants={draw}
          custom={1}
        />
        <motion.path
          d="M 80 78 V 138"
          stroke="#FFFFFF"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          variants={draw}
          custom={1.4}
        />

        {/* H letter — two verticals + crossbar */}
        <motion.path
          d="M 110 78 V 138"
          stroke="url(#thGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          variants={draw}
          custom={1.8}
        />
        <motion.path
          d="M 145 78 V 138"
          stroke="url(#thGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          variants={draw}
          custom={2.1}
        />
        <motion.path
          d="M 110 108 H 145"
          stroke="url(#thGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          variants={draw}
          custom={2.4}
        />
      </motion.svg>

      {showWordmark && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.6 }}
          className="mt-3 text-center"
        >
          <div className="font-display font-bold tracking-[0.2em] text-white text-lg">
            TRU<span style={{ color: "#00D4FF" }}>HUB</span>
          </div>
          <div className="text-[10px] tracking-[0.5em] text-white/50 mt-1">
            SOLUTIONS
          </div>
        </motion.div>
      )}
    </div>
  );
}
