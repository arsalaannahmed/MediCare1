import type React from "react";
import { summaryStats } from "../data/hospitals";

const SummaryPanel: React.FC = () => {
  const stats = [
    { label: "Government & Public", value: summaryStats.totalGovernment, icon: "🏛️", color: "bg-blue-50 border-blue-200 text-blue-700" },
    { label: "Private Multispecialty", value: summaryStats.totalPrivate, icon: "🏥", color: "bg-purple-50 border-purple-200 text-purple-700" },
    { label: "Specialty / Dedicated", value: summaryStats.totalSpecialty, icon: "🎗️", color: "bg-teal-50 border-teal-200 text-teal-700" },
    { label: "Nursing Homes", value: summaryStats.totalNursing, icon: "🛌", color: "bg-orange-50 border-orange-200 text-orange-700" },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 mb-8 text-white">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">📊</span>
        <div>
          <h2 className="text-xl font-bold">Summary Statistics</h2>
          <p className="text-slate-400 text-sm">Decision support data at a glance</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center border border-white/10 hover:bg-white/15 transition-colors">
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-3xl font-extrabold text-white">{s.value}</div>
            <div className="text-slate-300 text-xs mt-0.5 font-medium leading-tight">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-3 mb-6">
        <div className="bg-yellow-500/15 border border-yellow-400/30 rounded-xl p-4 flex items-center gap-3">
          <span className="text-3xl">⭐</span>
          <div>
            <div className="text-2xl font-extrabold text-yellow-300">{summaryStats.jciAccredited}</div>
            <div className="text-yellow-200 text-xs font-medium">JCI Accredited Hospital</div>
            <div className="text-yellow-300/60 text-xs">(Max/Alexis — International Standard)</div>
          </div>
        </div>

        <div className="bg-green-500/15 border border-green-400/30 rounded-xl p-4 flex items-center gap-3">
          <span className="text-3xl">✅</span>
          <div>
            <div className="text-2xl font-extrabold text-green-300">{summaryStats.nabhAccredited}</div>
            <div className="text-green-200 text-xs font-medium">NABH Accredited Hospitals</div>
            <div className="text-green-300/60 text-xs">(AIIMS, Max, KIMS, Wockhardt...)</div>
          </div>
        </div>

        <div className="bg-red-500/15 border border-red-400/30 rounded-xl p-4 flex items-center gap-3">
          <span className="text-3xl">🚨</span>
          <div>
            <div className="text-2xl font-extrabold text-red-300">{summaryStats.emergencyCoverage}</div>
            <div className="text-red-200 text-xs font-medium">24×7 Emergency Coverage</div>
            <div className="text-red-300/60 text-xs">(Of all listed hospitals)</div>
          </div>
        </div>
      </div>

      {/* Primary Locations */}
      <div>
        <h3 className="text-slate-300 text-sm font-semibold mb-3 flex items-center gap-2">
          <span>📍</span> Primary Hospital Cluster Locations
        </h3>
        <div className="flex flex-wrap gap-2">
          {summaryStats.primaryLocations.map((loc) => (
            <span
              key={loc}
              className="bg-white/10 border border-white/15 text-slate-200 text-xs font-medium rounded-full px-3 py-1.5 hover:bg-white/15 transition-colors"
            >
              {loc}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryPanel;
