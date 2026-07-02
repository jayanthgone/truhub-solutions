import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 600);
    }, 3000);
    return () => clearTimeout(t);
  }, [onDone]);

  if (!visible) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[100] pointer-events-none bg-black"
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-glow font-display text-7xl md:text-9xl font-bold"
        style={{ color: "#00D4FF" }}
      >
        TH
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-6 tracking-[0.4em] text-sm md:text-base text-white/80"
      >
        TRUHUB SOLUTIONS
      </motion.p>
    </motion.div>
  );
}
