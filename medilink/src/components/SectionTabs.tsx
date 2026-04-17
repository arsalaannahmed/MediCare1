import type React from "react";

type TabKey = "all" | "government" | "private" | "specialty" | "nursing";

interface Tab {
  key: TabKey;
  label: string;
  icon: string;
  count: number;
  color: string;
  activeColor: string;
}

interface SectionTabsProps {
  active: TabKey;
  setActive: (key: TabKey) => void;
  counts: { government: number; private: number; specialty: number; nursing: number; all: number };
}

const SectionTabs: React.FC<SectionTabsProps> = ({ active, setActive, counts }) => {
  const tabs: Tab[] = [
    { key: "all", label: "All", icon: "🏥", count: counts.all, color: "border-slate-200 text-slate-600 hover:border-slate-400", activeColor: "border-blue-600 bg-blue-600 text-white shadow-blue-200" },
    { key: "government", label: "Government", icon: "🏛️", count: counts.government, color: "border-slate-200 text-slate-600 hover:border-blue-400", activeColor: "border-blue-600 bg-blue-600 text-white shadow-blue-200" },
    { key: "private", label: "Private", icon: "🏥", count: counts.private, color: "border-slate-200 text-slate-600 hover:border-purple-400", activeColor: "border-purple-600 bg-purple-600 text-white shadow-purple-200" },
    { key: "specialty", label: "Specialty", icon: "🎗️", count: counts.specialty, color: "border-slate-200 text-slate-600 hover:border-teal-400", activeColor: "border-teal-600 bg-teal-600 text-white shadow-teal-200" },
    { key: "nursing", label: "Nursing Homes", icon: "🛌", count: counts.nursing, color: "border-slate-200 text-slate-600 hover:border-orange-400", activeColor: "border-orange-500 bg-orange-500 text-white shadow-orange-200" },
  ];

  return (
    <div className="flex gap-2 flex-wrap mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActive(tab.key)}
          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border-2 font-semibold text-sm transition-all duration-200 shadow-sm ${
            active === tab.key ? `${tab.activeColor} shadow-md` : `${tab.color} bg-white`
          }`}
        >
          <span>{tab.icon}</span>
          <span>{tab.label}</span>
          <span
            className={`ml-1 rounded-full px-2 py-0.5 text-xs font-bold ${
              active === tab.key ? "bg-white/25 text-white" : "bg-slate-100 text-slate-500"
            }`}
          >
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export type { TabKey };
export default SectionTabs;
