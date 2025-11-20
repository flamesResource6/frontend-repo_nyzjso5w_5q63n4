export default function Testimonials() {
  const quotes = [
    {
      q: "They delivered a beautiful site that doubled our signups.",
      a: "Sarah M., SaaS Founder",
    },
    {
      q: "A true partner — fast, strategic and fun to work with.",
      a: "James K., Marketing Lead",
    },
    {
      q: "Our new brand and site feel premium and trustworthy.",
      a: "Lena R., Fintech PM",
    },
  ];

  return (
    <section id="testimonials" className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">What clients say</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((t, i) => (
            <figure key={i} className="rounded-xl border border-white/10 bg-slate-900/50 p-6">
              <blockquote className="text-slate-200">“{t.q}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">{t.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
