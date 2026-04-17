import type React from "react";
import type { NursingHome } from "../data/hospitals";
import CostBadge from "./CostBadge";

interface Props {
  home: NursingHome;
  index: number;
}

const NursingCard: React.FC<Props> = ({ home, index }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group">
      <div className="h-1 bg-gradient-to-r from-orange-400 to-amber-500" />

      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm border-2 border-orange-200">
            {String(index).padStart(2, "0")}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-slate-800 text-sm leading-tight group-hover:text-orange-600 transition-colors">
              {home.name}
            </h3>
            <div className="flex items-center gap-1 mt-1 text-slate-500 text-xs">
              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{home.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2 flex-wrap">
          <span className="bg-orange-50 text-orange-700 border border-orange-200 rounded-full px-2.5 py-0.5 text-xs font-medium">
            🛌 {home.type}
          </span>
          <CostBadge tier={home.costTier} small />
        </div>
      </div>
    </div>
  );
};

export default NursingCard;
