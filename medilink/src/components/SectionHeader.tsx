import type React from "react";

interface Props {
  icon: string;
  title: string;
  subtitle: string;
  count: number;
  color: string;
}

const SectionHeader: React.FC<Props> = ({ icon, title, subtitle, count, color }) => {
  return (
    <div className={`rounded-2xl p-5 mb-5 border ${color}`}>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-800">{title}</h2>
            <p className="text-slate-500 text-xs sm:text-sm">{subtitle}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl px-4 py-2 shadow-sm border border-slate-100 text-center">
          <div className="text-2xl font-extrabold text-slate-700">{count}</div>
          <div className="text-xs text-slate-400 font-medium">Listed</div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
