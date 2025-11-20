export default function Services() {
  const services = [
    {
      title: "Strategy",
      desc: "Research, positioning and conversion-focused planning to hit your goals.",
    },
    {
      title: "Design",
      desc: "Branding and UI/UX with a premium aesthetic tailored to your audience.",
    },
    {
      title: "Development",
      desc: "Webflow, React and custom integrations built for performance and SEO.",
    },
    {
      title: "Maintenance",
      desc: "Continuous iteration, analytics and A/B testing for ongoing growth.",
    },
  ];

  return (
    <section id="services" className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Services</h2>
          <p className="mt-4 text-slate-400 max-w-2xl">A full-stack studio for modern brands. Pick a plan or mix and match — we tailor every engagement to your needs.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-slate-900/50 p-6 hover:bg-slate-900 transition">
              <div className="h-10 w-10 rounded-md bg-white/10 mb-4" />
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
