import { motion } from "framer-motion";
import founder from "@/assets/jayanth-founder.png.asset.json";

const skills = [
  "Web Development",
  "UI/UX Design",
  "Branding",
  "Digital Solutions",
];

export default function Founder() {
  return (
    <section id="founder" className="relative py-24 px-6">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(0,212,255,0.12), transparent 60%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.3em]" style={{ color: "#00D4FF" }}>
            LEADERSHIP
          </p>
          <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl">
            Meet the Founder
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[minmax(0,1fr)_1.2fr] gap-10 md:gap-14 items-center rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-10 card-glow">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="absolute -inset-3 rounded-2xl opacity-70 blur-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,212,255,0.35), transparent 70%)",
              }}
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src={founder.url}
                alt="Jayanth Gone, Founder & Chairman of TruHub Solutions"
                className="w-full h-full object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, rgba(10,10,10,0.6))",
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="font-display font-bold text-3xl md:text-4xl">
              Jayanth Gone
            </h3>
            <p
              className="mt-1 font-display tracking-widest text-sm"
              style={{ color: "#00D4FF" }}
            >
              FOUNDER & CHAIRMAN
            </p>

            <p className="mt-6 text-white/70 leading-relaxed">
              "Every brand carries a story worth telling with clarity and craft.
              At TruHub Solutions, we engineer digital experiences that don't
              just look premium — they compound value. Our vision is simple:
              build, grow, and scale ambitious businesses into digital
              landmarks."
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {skills.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 text-sm text-white/80"
                >
                  <span
                    className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[#0A0A0A] text-xs font-bold"
                    style={{
                      background: "#00D4FF",
                      boxShadow: "0 0 12px rgba(0,212,255,0.5)",
                    }}
                  >
                    ✓
                  </span>
                  {s}
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/917989367882?text=Hi%20Jayanth%2C%20let%27s%20build%20together."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block px-7 py-3 rounded-full font-medium transition hover:scale-105"
              style={{
                background: "#00D4FF",
                color: "#0A0A0A",
                boxShadow: "0 0 25px rgba(0,212,255,0.45)",
              }}
            >
              Let's Build Together →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
