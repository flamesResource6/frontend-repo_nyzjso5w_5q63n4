import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = scrolled
    ? "backdrop-blur-md bg-slate-900/70 border-b border-white/10"
    : "bg-transparent";

  const link = "text-slate-200 hover:text-white transition-colors";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${navClass}`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg" />
          <span className="text-white font-semibold tracking-tight">Ignite Labs</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className={link}>Services</a>
          <a href="#work" className={link}>Work</a>
          <a href="#process" className={link}>Process</a>
          <a href="#testimonials" className={link}>Testimonials</a>
          <a href="#contact" className="px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition">Contact</a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-slate-900/90 backdrop-blur-md border-t border-white/10">
          <a href="#services" onClick={() => setOpen(false)} className={link + " block"}>Services</a>
          <a href="#work" onClick={() => setOpen(false)} className={link + " block"}>Work</a>
          <a href="#process" onClick={() => setOpen(false)} className={link + " block"}>Process</a>
          <a href="#testimonials" onClick={() => setOpen(false)} className={link + " block"}>Testimonials</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition">Contact</a>
        </div>
      )}
    </header>
  );
}
