import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ContactChooser from "./ContactChooser";

const lines = [
  "Every great business deserves a digital identity.",
  "We build it.",
  "We grow it.",
  "We scale it.",
];

function Line({
  text,
  start,
  end,
  progress,
  accent,
}: {
  text: string;
  start: number;
  end: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  accent: boolean;
}) {
  const mid = (start + end) / 2;
  const opacity = useTransform(progress, [start, mid, end], [0, 1, 0]);
  const y = useTransform(progress, [start, mid, end], [40, 0, -40]);

  const [first, ...rest] = text.split(" ");
  return (
    <motion.h2
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center text-center px-6 font-display font-bold text-3xl sm:text-5xl md:text-6xl"
    >
      {accent ? (
        <span>
          {first}{" "}
          <span style={{ color: "#00D4FF" }} className="text-glow">
            {rest.join(" ")}
          </span>
        </span>
      ) : (
        text
      )}
    </motion.h2>
  );
}

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const [chooserOpen, setChooserOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 5 segments: 4 lines + CTA
  const segments = lines.length + 1;
  const step = 1 / segments;

  const ctaStart = lines.length * step;
  const ctaOpacity = useTransform(
    scrollYProgress,
    [ctaStart, ctaStart + step * 0.35],
    [0, 1],
  );
  const ctaY = useTransform(
    scrollYProgress,
    [ctaStart, ctaStart + step * 0.35],
    [30, 0],
  );

  return (
    <section
      id="about"
      ref={ref}
      className="relative"
      style={{ height: `${segments * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.15), transparent 60%)",
          }}
        />
        <div className="relative w-full h-56">
          {lines.map((t, i) => (
            <Line
              key={i}
              text={t}
              start={i * step}
              end={(i + 1) * step}
              progress={scrollYProgress}
              accent={i > 0}
            />
          ))}

          <motion.div
            style={{ opacity: ctaOpacity, y: ctaY }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >
            <p className="font-display text-2xl md:text-3xl text-white/80 mb-8">
              Ready to begin?
            </p>
            <button
              type="button"
              onClick={() => setChooserOpen(true)}
              className="px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
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
      </div>

      <ContactChooser open={chooserOpen} onClose={() => setChooserOpen(false)} />
    </section>
  );
}
