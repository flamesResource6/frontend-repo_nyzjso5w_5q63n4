import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <CTA />
      <footer className="bg-slate-950/90 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-400" />
            <span className="text-sm text-slate-400">© {new Date().getFullYear()} Ignite Labs</span>
          </div>
          <div className="text-sm text-slate-400">Made with care — strategy, design and code</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
