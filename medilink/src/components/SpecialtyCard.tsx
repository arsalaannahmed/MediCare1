import type React from "react";
import type { SpecialtyHospital } from "../data/hospitals";
import CostBadge from "./CostBadge";

interface Props {
  hospital: SpecialtyHospital;
  index: number;
}

const getSpecIcon = (spec: string): string => {
  const s = spec.toLowerCase();
  if (s.includes("onco") || s.includes("cancer")) return "🎗️";
  if (s.includes("neuro") || s.includes("spine")) return "🧠";
  if (s.includes("kidney") || s.includes("nephro")) return "🫘";
  if (s.includes("ortho") || s.includes("joint")) return "🦴";
  if (s.includes("eye") || s.includes("ophthal")) return "👁️";
  if (s.includes("ivf") || s.includes("fertility") || s.includes("infertil")) return "🌱";
  if (s.includes("chest") || s.includes("pulmo")) return "🫁";
  if (s.includes("ayurved") || s.includes("unani") || s.includes("yoga") || s.includes("herbal")) return "🌿";
  if (s.includes("trauma")) return "🚑";
  return "🏥";
};

const SpecialtyCard: React.FC<Props> = ({ hospital, index }) => {
  const icon = getSpecIcon(hospital.specialization);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-teal-500 to-emerald-600" />

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-xl border-2 border-teal-200">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-slate-800 text-base leading-tight group-hover:text-teal-700 transition-colors">
              {hospital.name}
            </h3>
            <div className="flex items-center gap-1 mt-1 text-slate-500 text-xs">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="truncate">{hospital.location}</span>
            </div>
          </div>
          <div className="flex-shrink-0 text-right">
            <span className="text-2xl font-extrabold text-slate-200">
              {String(index).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Specialization */}
        <div className="mb-3">
          <span className="inline-block bg-teal-50 text-teal-800 border border-teal-200 rounded-lg px-2.5 py-1 text-xs font-bold">
            {icon} {hospital.specialization}
          </span>
        </div>

        {/* Highlights */}
        <div className="mb-3 bg-slate-50 rounded-xl p-2.5">
          <p className="text-xs text-slate-600 font-medium leading-relaxed">
            💡 {hospital.highlights}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-2 flex-wrap pt-3 border-t border-slate-100">
          <CostBadge tier={hospital.costTier} />
          {hospital.emergency ? (
            <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 border border-red-200 rounded-full px-2.5 py-0.5 text-xs font-bold">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              {hospital.emergencyNote ? `Emergency (${hospital.emergencyNote})` : "Emergency"}
            </span>
          ) : (
            <span className="inline-flex items-center bg-slate-100 text-slate-400 rounded-full px-2.5 py-0.5 text-xs font-medium">
              {hospital.emergencyNote ? `⚠️ ${hospital.emergencyNote}` : "No Emergency"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecialtyCard;
