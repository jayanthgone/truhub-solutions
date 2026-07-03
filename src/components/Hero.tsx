import { motion } from "framer-motion";
import TruhubLogo from "./TruhubLogo";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24"
    >
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.35) 0%, rgba(0,212,255,0) 60%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_40%)]" />

      <div className="relative max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center mb-10"
        >
          <TruhubLogo size={180} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="font-display font-bold text-4xl sm:text-6xl md:text-7xl leading-[1.05]"
        >
          We Don't Just Build Websites.
          <br />
          We Build{" "}
          <span className="text-glow" style={{ color: "#00D4FF" }}>
            Digital Experiences.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.9 }}
          className="mt-8 text-lg text-white/70 max-w-2xl mx-auto"
        >
          A premium digital agency crafting cinematic web presences for
          ambitious brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.9 }}
          className="mt-14 text-xs tracking-[0.4em] text-white/40"
        >
          SCROLL TO BEGIN ↓
        </motion.div>
      </div>
    </section>
  );
}
