import { motion } from "framer-motion";

type Props = {
  size?: number;
  animate?: boolean;
  className?: string;
};

export default function TruhubLogo({
  size = 160,
  animate = true,
  className = "",
}: Props) {
  return (
    <motion.div
      initial={animate ? { opacity: 0, scale: 0.85, filter: "blur(12px)" } : false}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Blended cyan glow behind the logo */}
      <div
        className="absolute inset-0 rounded-full blur-2xl opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.55) 0%, rgba(0,212,255,0) 65%)",
        }}
      />
      {/* Pulsing ring */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[6%] rounded-full"
        style={{
          border: "1px solid rgba(0,212,255,0.35)",
          boxShadow: "inset 0 0 30px rgba(0,212,255,0.15)",
        }}
      />
    <img
  src="/truhub-logo.png"
  alt="TruHub Solutions"
  className="relative w-full h-full object-contain rounded-2xl"
  style={{
    filter:
      "drop-shadow(0 0 18px rgba(0,212,255,0.45)) contrast(1.05) saturate(1.1)",
    mixBlendMode: "screen",
  }}
/>
    </motion.div>
  );
}
