import { Rocket, Database, Cloud, BarChart3 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50" />
      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs text-sky-700 shadow-sm">
            <Rocket className="h-4 w-4" /> Data Engineering Project
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            LinkedIn Job Data Lake
          </h1>
          <p className="max-w-2xl text-slate-600 text-base md:text-lg">
            A complete, production-style pipeline to ingest, clean, store, and analyze job postings. Explore top companies, trending skills, and demand trends with an automated workflow.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {[
              { icon: <Database className="h-5 w-5 text-sky-700" />, label: "Data Lake" },
              { icon: <Cloud className="h-5 w-5 text-sky-700" />, label: "Orchestration" },
              { icon: <BarChart3 className="h-5 w-5 text-sky-700" />, label: "Analytics" },
              { icon: <Rocket className="h-5 w-5 text-sky-700" />, label: "Automation" },
            ].map((item, idx) => (
              <div key={idx} className="rounded-xl bg-white/80 backdrop-blur border border-slate-200 p-3 flex items-center gap-2 shadow-sm">
                {item.icon}
                <span className="text-sm font-medium text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
