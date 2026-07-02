import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
}: {
  text: string;
  start: number;
  end: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const mid = (start + end) / 2;
  const opacity = useTransform(progress, [start, mid, end], [0, 1, 0]);
  const y = useTransform(progress, [start, mid, end], [40, 0, -40]);

  return (
    <motion.h2
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center text-center px-6 font-display font-bold text-3xl sm:text-5xl md:text-6xl"
    >
      {text}
    </motion.h2>
  );
}

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const step = 1 / lines.length;

  return (
    <section id="about" ref={ref} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.15), transparent 60%)",
          }}
        />
        <div className="relative w-full h-40">
          {lines.map((t, i) => (
            <Line
              key={i}
              text={t}
              start={i * step}
              end={(i + 1) * step}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
