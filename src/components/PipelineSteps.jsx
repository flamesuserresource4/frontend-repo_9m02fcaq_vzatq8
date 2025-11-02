import { Database, Cloud, Activity, GitBranch, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Ingestion",
    desc: "Fetch job postings daily and land raw JSON/CSV to the data lake.",
    icon: Cloud,
    chips: ["Scrapy/Requests", "BeautifulSoup", "Raw JSON"],
  },
  {
    title: "Processing",
    desc: "Clean, dedupe, normalize skills, and standardize dates.",
    icon: Activity,
    chips: ["Pandas", "PySpark (optional)", "Prefect/Airflow"],
  },
  {
    title: "Storage",
    desc: "Publish curated data to a warehouse for analysis.",
    icon: Database,
    chips: ["Parquet/CSV", "SQLite/Postgres", "Athena-ready"],
  },
  {
    title: "Orchestration",
    desc: "Automate daily runs with dependencies and alerts.",
    icon: GitBranch,
    chips: ["DAG/Flow", "Retry & SLA", "Notifications"],
  },
];

export default function PipelineSteps() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Pipeline Overview</h2>
        <div className="hidden md:flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-sm">
          <CheckCircle2 className="h-4 w-4" /> Fully Automated
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map(({ title, desc, icon: Icon, chips }) => (
          <div key={title} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-9 w-9 grid place-items-center rounded-lg bg-sky-50 text-sky-700 border border-sky-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">{desc}</p>
            <div className="flex flex-wrap gap-2">
              {chips.map((c) => (
                <span key={c} className="text-xs px-2 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
