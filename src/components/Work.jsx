export default function Work() {
  const items = [
    { title: "E‑commerce Redesign", tag: "Design / Dev" },
    { title: "SaaS Marketing Site", tag: "Strategy / Design" },
    { title: "Fintech Dashboard", tag: "Design / Dev" },
    { title: "Brand Refresh", tag: "Identity / Web" },
    { title: "Landing Page Sprint", tag: "Design" },
    { title: "Content Platform", tag: "Dev" },
  ];

  return (
    <section id="work" className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Selected work</h2>
            <p className="mt-4 text-slate-400 max-w-2xl">A snapshot of recent projects across product, marketing and brand.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-100 transition">Start a project</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900" />
              <div className="p-5">
                <div className="text-xs text-slate-400">{it.tag}</div>
                <div className="text-white font-semibold mt-1 group-hover:underline">{it.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
