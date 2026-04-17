import type React from "react";

interface SearchBarProps {
  search: string;
  setSearch: (val: string) => void;
  emergencyOnly: boolean;
  setEmergencyOnly: (val: boolean) => void;
  costFilter: string;
  setCostFilter: (val: string) => void;
  totalResults: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  search,
  setSearch,
  emergencyOnly,
  setEmergencyOnly,
  costFilter,
  setCostFilter,
  totalResults,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-4 sm:p-6 mb-6">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search hospitals by name, location, specialty..."
            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Cost Filter */}
        <select
          value={costFilter}
          onChange={(e) => setCostFilter(e.target.value)}
          className="px-4 py-3 border border-slate-200 rounded-xl text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-w-[160px]"
        >
          <option value="">All Cost Tiers</option>
          <option value="Free">Free</option>
          <option value="Very Low">Very Low</option>
          <option value="Low">Low</option>
          <option value="Low-Medium">Low-Medium</option>
          <option value="Medium">Medium</option>
          <option value="Medium-High">Medium-High</option>
          <option value="High">High</option>
        </select>

        {/* Emergency Toggle */}
        <button
          onClick={() => setEmergencyOnly(!emergencyOnly)}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl border-2 font-semibold text-sm transition-all duration-200 whitespace-nowrap ${
            emergencyOnly
              ? "border-red-500 bg-red-50 text-red-700"
              : "border-slate-200 bg-slate-50 text-slate-600 hover:border-red-300 hover:text-red-600"
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${emergencyOnly ? "bg-red-500 animate-pulse" : "bg-slate-400"}`} />
          24×7 Emergency
        </button>
      </div>

      {/* Results count */}
      <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <span>
          Showing <strong className="text-slate-700">{totalResults}</strong> hospitals
          {(search || emergencyOnly || costFilter) && (
            <span> matching your filters</span>
          )}
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
