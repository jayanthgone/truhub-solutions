import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/truhub-logo.png.asset.json";

export default function Intro({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 700);
    }, 3200);
    return () => clearTimeout(t);
  }, [onDone]);

  if (!visible) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed inset-0 z-[100] pointer-events-none bg-black"
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.25) 0%, rgba(0,212,255,0) 55%)",
        }}
      />
      <motion.img
        src={logo.url}
        alt="TruHub Solutions"
        initial={{ opacity: 0, scale: 0.6, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative w-[280px] md:w-[420px] drop-shadow-[0_0_40px_rgba(0,212,255,0.35)]"
      />
    </motion.div>
  );
}
