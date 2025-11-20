export default function CTA() {
  return (
    <section id="contact" className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Have a project in mind?</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">Tell us about your goals and timeline. We’ll come back with a plan, scope and pricing within 24 hours.</p>
          <form className="mt-8 grid md:grid-cols-3 gap-4 text-left">
            <input required placeholder="Your name" className="rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input required placeholder="Email" type="email" className="rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input required placeholder="Company / Project" className="rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <textarea required placeholder="Tell us about your project" className="md:col-span-3 rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20" rows={4} />
            <button className="md:col-span-3 inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-6 py-3 font-medium hover:bg-slate-100 transition">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
