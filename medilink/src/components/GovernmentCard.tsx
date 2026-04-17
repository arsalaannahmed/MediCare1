import type React from "react";
import type { GovernmentHospital } from "../data/hospitals";
import CostBadge from "./CostBadge";

interface Props {
  hospital: GovernmentHospital;
  index: number;
}

const GovernmentCard: React.FC<Props> = ({ hospital, index }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-700" />

      <div className="p-5">
        {/* Header Row */}
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm border-2 border-blue-200">
            {String(index).padStart(2, "0")}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-slate-800 text-base leading-tight group-hover:text-blue-700 transition-colors">
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
        </div>

        {/* Type Tag */}
        <div className="mb-3">
          <span className="inline-block bg-blue-50 text-blue-700 border border-blue-200 rounded-lg px-2.5 py-1 text-xs font-semibold">
            🏛️ {hospital.type}
          </span>
        </div>

        {/* Specialties */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {hospital.keySpecialties.map((spec) => (
            <span key={spec} className="bg-slate-100 text-slate-600 rounded-full px-2.5 py-0.5 text-xs font-medium">
              {spec}
            </span>
          ))}
        </div>

        {/* Footer Row */}
        <div className="flex items-center justify-between gap-2 flex-wrap pt-3 border-t border-slate-100">
          <CostBadge tier={hospital.costTier} />
          <div className="flex items-center gap-2">
            {hospital.emergency ? (
              <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 border border-red-200 rounded-full px-2.5 py-0.5 text-xs font-bold">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                Emergency {hospital.emergencyNote ? `(${hospital.emergencyNote})` : ""}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-500 rounded-full px-2.5 py-0.5 text-xs font-medium">
                {hospital.emergencyNote ? `⚠️ ${hospital.emergencyNote}` : "No Emergency"}
              </span>
            )}
          </div>
        </div>

        {/* Accreditation / Highlights */}
        {hospital.accreditation && (
          <div className="mt-3 flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-xl p-2.5">
            <span className="text-amber-500 text-sm mt-0.5 flex-shrink-0">✨</span>
            <p className="text-xs text-amber-800 font-medium leading-relaxed">{hospital.accreditation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GovernmentCard;
