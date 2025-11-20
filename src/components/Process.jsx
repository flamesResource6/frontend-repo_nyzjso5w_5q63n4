export default function Process() {
  const steps = [
    { n: "01", t: "Discover", d: "We learn your goals, audience and constraints to set direction." },
    { n: "02", t: "Design", d: "Rapid iteration to find a visual language that feels like you." },
    { n: "03", t: "Build", d: "We develop fast, accessible and SEO-friendly websites." },
    { n: "04", t: "Grow", d: "Launch, measure, iterate. We partner for the long term." },
  ];

  return (
    <section id="process" className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Process</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-xl border border-white/10 bg-slate-900/50 p-6">
              <div className="text-xs text-slate-400">{s.n}</div>
              <div className="mt-2 text-white font-semibold">{s.t}</div>
              <div className="mt-2 text-sm text-slate-400">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
