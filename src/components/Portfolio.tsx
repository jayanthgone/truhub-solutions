import { motion } from "framer-motion";
import { useProjects } from "@/lib/portfolio-store";

export default function Portfolio() {
  const projects = useProjects();

  return (
    <section id="portfolio" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p
            className="text-sm tracking-[0.3em] mb-4"
            style={{ color: "#00D4FF" }}
          >
            SELECTED WORK
          </p>
          <h2 className="font-display font-bold text-4xl md:text-6xl">
            Crafted with Precision
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.link || "#"}
              target={p.link?.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-glow group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 h-64 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              <div
                className="absolute -right-20 -top-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-500"
                style={{ background: "#00D4FF" }}
              />
              <div className="relative">
                <span className="text-xs text-white/40 font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <div className="relative flex items-center gap-2 text-sm text-white/70 group-hover:text-white transition-colors">
                <span>View case study</span>
                <span
                  className="transition-transform group-hover:translate-x-1"
                  style={{ color: "#00D4FF" }}
                >
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
