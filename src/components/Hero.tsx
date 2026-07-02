import { motion } from "framer-motion";
import logo from "@/assets/truhub-logo.png.asset.json";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
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
        <motion.img
          src={logo.url}
          alt="TruHub Solutions"
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mx-auto mb-8 w-[120px] md:w-[160px] drop-shadow-[0_0_30px_rgba(0,212,255,0.35)]"
        />

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
          A premium digital agency crafting cinematic web presences for ambitious brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2.6, duration: 0.8, ease: "easeOut" }}
          className="mt-10"
        >
          <a
            href="#portfolio"
            className="inline-block px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: "#00D4FF",
              color: "#0A0A0A",
              boxShadow: "0 0 30px rgba(0,212,255,0.5)",
            }}
          >
            Start Your Journey →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
