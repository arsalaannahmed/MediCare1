import type React from "react";
import type { CostTier } from "../data/hospitals";

interface CostBadgeProps {
  tier: CostTier;
  small?: boolean;
}

const costConfig: Record<CostTier, { label: string; className: string }> = {
  Free: { label: "Free", className: "bg-green-100 text-green-800 border-green-200" },
  "Very Low": { label: "Very Low", className: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  Low: { label: "Low", className: "bg-teal-100 text-teal-800 border-teal-200" },
  "Low-Medium": { label: "Low-Medium", className: "bg-cyan-100 text-cyan-800 border-cyan-200" },
  Medium: { label: "Medium", className: "bg-blue-100 text-blue-800 border-blue-200" },
  "Medium-High": { label: "Medium-High", className: "bg-amber-100 text-amber-800 border-amber-200" },
  High: { label: "High", className: "bg-red-100 text-red-800 border-red-200" },
};

const CostBadge: React.FC<CostBadgeProps> = ({ tier, small }) => {
  const config = costConfig[tier];
  return (
    <span
      className={`inline-flex items-center border rounded-full font-semibold ${
        small ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs"
      } ${config.className}`}
    >
      💰 {config.label}
    </span>
  );
};

export default CostBadge;
