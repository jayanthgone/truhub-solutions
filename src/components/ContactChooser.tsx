import { motion, AnimatePresence } from "framer-motion";

const PHONE = "917989367882";
const EMAIL = "truhub.solutions@gmail.com";

export default function ContactChooser({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
          onClick={onClose}
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
                onClick={onClose}
                className="w-full px-6 py-3 rounded-full text-sm text-white/60 hover:text-white transition cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
