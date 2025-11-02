import Hero from "./components/Hero";
import PipelineSteps from "./components/PipelineSteps";
import InsightCards from "./components/InsightCards";
import MiniDashboard from "./components/MiniDashboard";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <InsightCards />
      <PipelineSteps />
      <MiniDashboard />

      <footer className="border-t border-slate-200 mt-8">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-slate-500">
          Built as a showcase of a LinkedIn Job Data Lake pipeline — ingestion, processing, storage, and analytics in one place.
        </div>
      </footer>
    </div>
  );
}

export default App;
