import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TruhubLogo from "./TruhubLogo";

export default function Intro({ onDone }: { onDone: () => void }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fade = setTimeout(() => setFading(true), 3600);
    const done = setTimeout(onDone, 4300);
    return () => {
      clearTimeout(fade);
      clearTimeout(done);
    };
  }, [onDone]);

  return (
    <motion.div
      animate={{ opacity: fading ? 0 : 1 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.25) 0%, rgba(0,212,255,0) 55%)",
        }}
      />
      <TruhubLogo size={320} showWordmark />
    </motion.div>
  );
}
