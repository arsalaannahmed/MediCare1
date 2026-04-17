import { useState, useMemo } from "react";
import {
  governmentHospitals,
  privateHospitals,
  specialtyHospitals,
  nursingHomes,
} from "./data/hospitals";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SectionTabs, { type TabKey } from "./components/SectionTabs";
import SectionHeader from "./components/SectionHeader";
import GovernmentCard from "./components/GovernmentCard";
import PrivateCard from "./components/PrivateCard";
import SpecialtyCard from "./components/SpecialtyCard";
import NursingCard from "./components/NursingCard";
import SummaryPanel from "./components/SummaryPanel";

function App() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [search, setSearch] = useState("");
  const [emergencyOnly, setEmergencyOnly] = useState(false);
  const [costFilter, setCostFilter] = useState("");

  const matchesSearch = (name: string, location: string, extras: string[]) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      name.toLowerCase().includes(q) ||
      location.toLowerCase().includes(q) ||
      extras.some((e) => e.toLowerCase().includes(q))
    );
  };

  const filteredGov = useMemo(() =>
    governmentHospitals.filter((h) => {
      if (emergencyOnly && !h.emergency) return false;
      if (costFilter && h.costTier !== costFilter) return false;
      return matchesSearch(h.name, h.location, [...h.keySpecialties, h.type]);
    }),
    [search, emergencyOnly, costFilter]
  );

  const filteredPrivate = useMemo(() =>
    privateHospitals.filter((h) => {
      if (emergencyOnly && !h.emergency) return false;
      if (costFilter && h.costTier !== costFilter) return false;
      return matchesSearch(h.name, h.location, [...h.keySpecialties, h.accreditation]);
    }),
    [search, emergencyOnly, costFilter]
  );

  const filteredSpecialty = useMemo(() =>
    specialtyHospitals.filter((h) => {
      if (emergencyOnly && !h.emergency) return false;
      if (costFilter && h.costTier !== costFilter) return false;
      return matchesSearch(h.name, h.location, [h.specialization, h.highlights]);
    }),
    [search, emergencyOnly, costFilter]
  );

  const filteredNursing = useMemo(() =>
    nursingHomes.filter((h) => {
      if (emergencyOnly) return false;
      if (costFilter && h.costTier !== costFilter) return false;
      return matchesSearch(h.name, h.location, [h.type]);
    }),
    [search, emergencyOnly, costFilter]
  );

  const totalResults =
    filteredGov.length + filteredPrivate.length + filteredSpecialty.length + filteredNursing.length;

  const totalHospitals =
    governmentHospitals.length + privateHospitals.length + specialtyHospitals.length + nursingHomes.length;

  const showGov = activeTab === "all" || activeTab === "government";
  const showPrivate = activeTab === "all" || activeTab === "private";
  const showSpecialty = activeTab === "all" || activeTab === "specialty";
  const showNursing = activeTab === "all" || activeTab === "nursing";

  return (
    <div className="min-h-screen bg-slate-50">
      <Header totalHospitals={totalHospitals} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Summary Panel */}
        <SummaryPanel />

        {/* Search & Filters */}
        <SearchBar
          search={search}
          setSearch={setSearch}
          emergencyOnly={emergencyOnly}
          setEmergencyOnly={setEmergencyOnly}
          costFilter={costFilter}
          setCostFilter={setCostFilter}
          totalResults={totalResults}
        />

        {/* Section Tabs */}
        <SectionTabs
          active={activeTab}
          setActive={setActiveTab}
          counts={{
            all: totalResults,
            government: filteredGov.length,
            private: filteredPrivate.length,
            specialty: filteredSpecialty.length,
            nursing: filteredNursing.length,
          }}
        />

        {/* No results */}
        {totalResults === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-slate-600 mb-2">No hospitals found</h3>
            <p className="text-slate-400 text-sm">Try adjusting your search or filters</p>
            <button
              onClick={() => { setSearch(""); setEmergencyOnly(false); setCostFilter(""); }}
              className="mt-4 px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Section A: Government */}
        {showGov && filteredGov.length > 0 && (
          <section className="mb-12">
            <SectionHeader
              icon="🏛️"
              title="Section A: Government & Public Sector Hospitals"
              subtitle="Affordable/Free care, Teaching Institutions, High Patient Volume"
              count={filteredGov.length}
              color="bg-blue-50 border-blue-200"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredGov.map((h, i) => (
                <GovernmentCard key={h.id} hospital={h} index={i + 1} />
              ))}
            </div>
          </section>
        )}

        {/* Section B: Private */}
        {showPrivate && filteredPrivate.length > 0 && (
          <section className="mb-12">
            <SectionHeader
              icon="🏥"
              title="Section B: Private Multispecialty & Super-Specialty"
              subtitle="Advanced Technology, JCI/NABH Accreditation, Higher Costs"
              count={filteredPrivate.length}
              color="bg-purple-50 border-purple-200"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPrivate.map((h, i) => (
                <PrivateCard key={h.id} hospital={h} index={i + 1} />
              ))}
            </div>
          </section>
        )}

        {/* Section C: Specialty */}
        {showSpecialty && filteredSpecialty.length > 0 && (
          <section className="mb-12">
            <SectionHeader
              icon="🎗️"
              title="Section C: Specialty & Dedicated Care"
              subtitle="Specific Conditions — Cancer, Eye, Ortho, Kidney, Neuro & More"
              count={filteredSpecialty.length}
              color="bg-teal-50 border-teal-200"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSpecialty.map((h, i) => (
                <SpecialtyCard key={h.id} hospital={h} index={i + 1} />
              ))}
            </div>
          </section>
        )}

        {/* Section D: Nursing Homes */}
        {showNursing && filteredNursing.length > 0 && (
          <section className="mb-12">
            <SectionHeader
              icon="🛌"
              title="Section D: Notable Nursing Homes & Minor Centers"
              subtitle="Primary Care, Minor Surgery, Delivery Services"
              count={filteredNursing.length}
              color="bg-orange-50 border-orange-200"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredNursing.map((h, i) => (
                <NursingCard key={h.id} home={h} index={i + 1} />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-10 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏥</span>
              <div>
                <div className="text-white font-bold text-lg">Nagpur Hospital Directory</div>
                <div className="text-slate-400 text-sm">Consolidated Master List — All Categories</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-center">
              <div className="text-slate-400">
                <span className="text-white font-bold">{totalHospitals}</span> Hospitals Listed
              </div>
              <div className="text-slate-400">
                <span className="text-white font-bold">4</span> Categories
              </div>
              <div className="text-slate-400">
                <span className="text-white font-bold">80%</span> With 24×7 Emergency
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-700 text-center text-xs text-slate-500">
            ⚠️ This directory is for informational purposes only. Always verify hospital details directly before visiting. Information subject to change.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
