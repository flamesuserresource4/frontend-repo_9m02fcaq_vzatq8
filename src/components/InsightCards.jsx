import { Building2, TrendingUp, MapPin, BarChart3 } from "lucide-react";

const colorClasses = {
  indigo: {
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    text: "text-indigo-700",
  },
  sky: {
    bg: "bg-sky-50",
    border: "border-sky-200",
    text: "text-sky-700",
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    text: "text-rose-700",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-700",
  },
};

const insights = [
  {
    title: "Top Companies",
    metric: "Snowflake, Databricks, Amazon",
    icon: Building2,
    color: "indigo",
    subtitle: "Most active hiring brands this week",
  },
  {
    title: "Trending Skills",
    metric: "Python, SQL, Spark, Airflow",
    icon: BarChart3,
    color: "sky",
    subtitle: "Most cited skills across postings",
  },
  {
    title: "Hot Locations",
    metric: "NYC, SF Bay Area, Austin",
    icon: MapPin,
    color: "rose",
    subtitle: "Regions with highest demand",
  },
  {
    title: "Growth",
    metric: "+18% MoM",
    icon: TrendingUp,
    color: "emerald",
    subtitle: "Data Engineer role growth",
  },
];

export default function InsightCards() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map(({ title, metric, icon: Icon, color, subtitle }) => {
          const c = colorClasses[color];
          return (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                <span className={`h-9 w-9 grid place-items-center rounded-lg ${c.bg} ${c.border} ${c.text} border`}>
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <div className="text-xl font-bold text-slate-900">{metric}</div>
              <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
