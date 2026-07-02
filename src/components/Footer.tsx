export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/5 py-16 px-6 mt-20"
    >
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display font-bold text-2xl">
            <span style={{ color: "#00D4FF" }}>TH</span>{" "}
            <span className="text-white/80 tracking-widest text-sm">
              TRUHUB SOLUTIONS
            </span>
          </div>
          <p className="mt-4 text-sm text-white/50 max-w-xs">
            Digital experiences engineered for ambitious brands.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest text-white/60 mb-4">
            EXPLORE
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest text-white/60 mb-4">
            CONTACT
          </h4>
          <p className="text-sm text-white/70">
            <a href="mailto:truhub.solutions@gmail.com" className="hover:text-white">
              truhub.solutions@gmail.com
            </a>
          </p>
          <p className="text-sm text-white/70 mt-1">
            <a href="tel:+917989367882" className="hover:text-white">
              +91 79893 67882
            </a>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex justify-between text-xs text-white/40">
        <span>© {new Date().getFullYear()} TruHub Solutions.</span>
        <span>Built with care.</span>
      </div>
    </footer>
  );
}
