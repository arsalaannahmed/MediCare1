import type React from "react";

interface HeaderProps {
  totalHospitals: number;
}

const Header: React.FC<HeaderProps> = ({ totalHospitals }) => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full opacity-10 translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white rounded-full opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 text-white text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Nagpur, Maharashtra, India
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3 leading-tight tracking-tight">
            🏥 Nagpur Hospital
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-teal-200 mb-5">
            Master Directory
          </h2>

          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
            Comprehensive consolidated list of all hospitals in Nagpur — Government, Private, Specialty & Nursing Homes with detailed information for informed healthcare decisions.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 w-full max-w-3xl">
            {[
              { label: "Total Hospitals", value: totalHospitals, icon: "🏥", color: "from-blue-500 to-blue-600" },
              { label: "JCI Accredited", value: "1", icon: "⭐", color: "from-yellow-500 to-orange-500" },
              { label: "NABH Accredited", value: "10+", icon: "✅", color: "from-green-500 to-emerald-600" },
              { label: "24×7 Emergency", value: "80%", icon: "🚨", color: "from-red-500 to-rose-600" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center hover:bg-white/15 transition-all duration-200"
              >
                <div className={`text-2xl mb-1`}>{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="text-blue-200 text-xs sm:text-sm mt-0.5 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40 L0 20 Q360 0 720 20 Q1080 40 1440 20 L1440 40 Z" fill="rgb(241 245 249)" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
