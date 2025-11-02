import { Calendar, TrendingUp, MapPin } from "lucide-react";

// Simple inline dataset to render tiny charts without external libs
const trendData = [12, 15, 18, 14, 22, 26, 31, 29, 34, 38, 41, 45];
const locationData = [
  { label: "NYC", value: 36 },
  { label: "SF", value: 28 },
  { label: "Austin", value: 19 },
  { label: "Remote", value: 44 },
];
const monthLabels = [
  "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
];

function Sparkline({ data, width = 300, height = 80, stroke = "#0ea5e9" }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * (width - 8) + 4;
      const y = height - ((d - min) / (max - min || 1)) * (height - 8) - 4;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <polyline
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        points={points}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Bars({ data, width = 300, height = 120, color = "#22c55e" }) {
  const max = Math.max(...data.map((d) => d.value));
  const barWidth = (width - 20) / data.length;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {data.map((d, i) => {
        const h = ((d.value / (max || 1)) * (height - 30));
        const x = 10 + i * barWidth + 5;
        const y = height - h - 20;
        return (
          <g key={d.label}>
            <rect x={x} y={y} width={barWidth - 10} height={h} rx={6} fill={color} />
            <text x={x + (barWidth - 10) / 2} y={height - 6} textAnchor="middle" fontSize="10" fill="#475569">
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function MiniDashboard() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Insights Preview</h2>
        <div className="hidden md:flex items-center gap-2 text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full text-sm">
          <Calendar className="h-4 w-4" /> Updated Daily
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-slate-900">Growth of Data Engineer Roles</h3>
              <p className="text-xs text-slate-500">Monthly posting counts</p>
            </div>
            <TrendingUp className="h-5 w-5 text-emerald-600" />
          </div>
          <Sparkline data={trendData} />
          <div className="mt-3 flex gap-2 flex-wrap">
            {trendData.map((v, i) => (
              <span key={i} className="text-[10px] text-slate-500">
                {monthLabels[i]}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-slate-900">Top Job Locations</h3>
              <p className="text-xs text-slate-500">Share of postings by region</p>
            </div>
            <MapPin className="h-5 w-5 text-rose-600" />
          </div>
          <Bars data={locationData} />
        </div>
      </div>
    </section>
  );
}
