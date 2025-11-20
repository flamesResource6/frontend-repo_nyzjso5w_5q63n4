import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      {/* gradient bg */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* glow blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              We design and build websites that convert.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl"
            >
              Strategy, design and development for ambitious brands. From landing pages to complex apps — we ship fast and make it beautiful.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-6 py-3 font-medium hover:bg-slate-100 transition">
                Start a project
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-md bg-white/10 border border-white/10 text-white px-6 py-3 font-medium hover:bg-white/20 transition">
                See our work
              </a>
            </motion.div>

            <div className="mt-10 flex items-center gap-6 text-sm text-slate-400">
              <span>Web Design</span>
              <span>•</span>
              <span>Webflow & React</span>
              <span>•</span>
              <span>Branding</span>
              <span>•</span>
              <span>SEO</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.08),transparent)]" />
              <div className="absolute inset-0 p-6 grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="rounded-lg bg-white/5 border border-white/10" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
