import type React from "react";
import type { PrivateHospital } from "../data/hospitals";
import CostBadge from "./CostBadge";

interface Props {
  hospital: PrivateHospital;
  index: number;
}

const accreditationColor = (acc: string) => {
  if (acc.includes("JCI")) return "bg-yellow-50 text-yellow-800 border-yellow-300";
  if (acc.includes("NABH")) return "bg-green-50 text-green-700 border-green-200";
  return "bg-slate-100 text-slate-500 border-slate-200";
};

const PrivateCard: React.FC<Props> = ({ hospital, index }) => {
  const hasJCI = hospital.accreditation.includes("JCI");
  const hasNABH = hospital.accreditation.includes("NABH");

  return (
    <div className={`bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group ${hasJCI ? "border-yellow-200 ring-1 ring-yellow-200" : "border-slate-100"}`}>
      {/* Top accent bar */}
      <div className={`h-1 ${hasJCI ? "bg-gradient-to-r from-yellow-400 to-orange-500" : hasNABH ? "bg-gradient-to-r from-green-500 to-emerald-600" : "bg-gradient-to-r from-purple-500 to-purple-700"}`} />

      <div className="p-5">
        {/* JCI Banner */}
        {hasJCI && (
          <div className="mb-3 flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl px-3 py-2">
            <span className="text-base">⭐</span>
            <span className="text-yellow-800 text-xs font-bold tracking-wide uppercase">JCI Accredited — International Standard</span>
          </div>
        )}

        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 ${hasJCI ? "bg-yellow-100 border-yellow-300 text-yellow-700" : "bg-purple-100 border-purple-200 text-purple-700"}`}>
            {String(index).padStart(2, "0")}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-slate-800 text-base leading-tight group-hover:text-purple-700 transition-colors">
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

          {/* Beds badge */}
          <div className="flex-shrink-0 text-center">
            <div className="text-lg font-extrabold text-purple-600">{hospital.beds}</div>
            <div className="text-xs text-slate-400 font-medium">Beds</div>
          </div>
        </div>

        {/* Specialties */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {hospital.keySpecialties.map((spec) => (
            <span key={spec} className="bg-purple-50 text-purple-700 border border-purple-100 rounded-full px-2.5 py-0.5 text-xs font-medium">
              {spec}
            </span>
          ))}
        </div>

        {/* Accreditation */}
        {hospital.accreditation !== "—" && (
          <div className={`mb-3 flex items-center gap-2 border rounded-xl px-3 py-1.5 ${accreditationColor(hospital.accreditation)}`}>
            <span className="text-sm">🏅</span>
            <span className="text-xs font-bold">{hospital.accreditation}</span>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between gap-2 flex-wrap pt-3 border-t border-slate-100">
          <CostBadge tier={hospital.costTier} />
          {hospital.emergency && (
            <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 border border-red-200 rounded-full px-2.5 py-0.5 text-xs font-bold">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              24×7 Emergency
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivateCard;
