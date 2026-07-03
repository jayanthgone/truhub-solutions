import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TruhubLogo from "./TruhubLogo";

const lines = [
  { text: "Every great business deserves a digital identity.", delay: 2.6 },
  { text: "We build it.", delay: 3.6 },
  { text: "We grow it.", delay: 4.3 },
  { text: "We scale it.", delay: 5.0 },
];

const BUTTON_DELAY = 6.0;
const PHONE = "917989367882";
const EMAIL = "truhub.solutions@gmail.com";

export default function Hero() {
  const [chooserOpen, setChooserOpen] = useState(false);

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
          className="flex justify-center mb-8"
        >
          <TruhubLogo size={140} />
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
          A premium digital agency crafting cinematic web presences for ambitious brands.
        </motion.p>

        <div className="mt-12 space-y-3">
          {lines.map((l, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: l.delay, duration: 0.7, ease: "easeOut" }}
              className={
                i === 0
                  ? "font-display text-xl md:text-2xl text-white/90"
                  : "font-display text-lg md:text-xl text-white/70"
              }
            >
              {i === 0 ? (
                l.text
              ) : (
                <span>
                  {l.text.split(" ")[0]}{" "}
                  <span style={{ color: "#00D4FF" }}>{l.text.split(" ").slice(1).join(" ")}</span>
                </span>
              )}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: BUTTON_DELAY, duration: 0.8, ease: "easeOut" }}
          className="mt-12"
        >
          <button
            type="button"
            onClick={() => setChooserOpen(true)}
            className="inline-block px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
              background: "#00D4FF",
              color: "#0A0A0A",
              boxShadow: "0 0 30px rgba(0,212,255,0.5)",
            }}
          >
            Start Your Journey →
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {chooserOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
            onClick={() => setChooserOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 text-center"
              style={{ boxShadow: "0 0 60px rgba(0,212,255,0.25)" }}
            >
              <h3 className="font-display text-2xl font-bold">Let's talk</h3>
              <p className="mt-2 text-sm text-white/60">
                How would you like to reach us?
              </p>
              <div className="mt-6 grid gap-3">
                <a
                  href={`https://wa.me/${PHONE}?text=${encodeURIComponent(
                    "Hi TruHub, I'd like to start my journey.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 rounded-full font-medium bg-[#25D366] text-black hover:opacity-90 transition"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                    "New project inquiry",
                  )}`}
                  className="w-full px-6 py-3 rounded-full font-medium transition"
                  style={{
                    background: "#00D4FF",
                    color: "#0A0A0A",
                    boxShadow: "0 0 20px rgba(0,212,255,0.4)",
                  }}
                >
                  Email us on Gmail
                </a>
                <button
                  type="button"
                  onClick={() => setChooserOpen(false)}
                  className="w-full px-6 py-3 rounded-full text-sm text-white/60 hover:text-white transition cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
