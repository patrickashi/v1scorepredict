// src/pages/LeaderboardPage.jsx
import { FaStar, FaFire, FaBullseye, FaFlag, FaTrophy, FaUser } from "react-icons/fa";
import Layout from "../components/Layout";

const gradientText = "bg-gradient-to-r from-emerald-300 to-sky-500 bg-clip-text text-transparent";

export default function LeaderboardPage() {
  // Dummy data for now
  const rankings = [
    { name: "Jane Points", value: 85, label: "Jane Points", sub: "36 pt" },
    { name: "Total Points", value: 85, label: "Total Points", sub: "32 pt" },
    { name: "Accuracy", value: "6%", label: "Accuracy", sub: "32" },
  ];
  const leagues = [
    { name: "John Doe (You)", value: 85, label: "Total Points" },
    { name: "Jane Smith", value: 68, label: "Total Point" },
    { name: "Mike Johnson", value: 32, label: "Predictions" },
    { name: "Alex Garcia", value: 32, label: "32 Exact" },
    { name: "Emma Davis", value: 66, label: "Exact Scores" },
  ];

  return (
 
      <div className="w-full max-w-6xl mx-auto py-8 px-2 md:px-0 flex flex-col md:flex-row gap-8">
        {/* Leaderboard Section */}
        <section className="flex-1 bg-[#181730] rounded-xl p-6 min-w-[320px]">
          <h1 className="text-2xl font-bold mb-6">Global Leaderboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {rankings.map((r, i) => (
              <div key={i} className="flex flex-col items-center justify-center bg-[#23213a] rounded-lg p-4">
                <span className={`text-3xl font-bold mb-2 ${gradientText}`}>{r.value}</span>
                <span className="font-semibold">{r.label}</span>
                <span className="text-xs text-gray-400">{r.sub}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#23213a] rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">My Leagues</span>
              <span className="text-xs text-gray-400">Pricill</span>
            </div>
            <ol>
              {leagues.map((user, i) => (
                <li key={i} className="flex justify-between items-center py-2 border-b border-[#181730] last:border-0">
                  <div className="flex items-center gap-2">
                    <span className={`font-bold ${i === 0 ? gradientText : i === 1 ? "text-gray-300" : i === 2 ? "text-orange-400" : "text-gray-400"}`}>
                      {i + 1}
                    </span>
                    <span className={i === 0 ? "font-bold" : ""}>{user.name}</span>
                  </div>
                  <span className="text-sm text-gray-200">{user.value} <span className="text-xs text-gray-400">{user.label}</span></span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="flex-1 bg-[#181730] rounded-xl p-6 min-w-[320px]">
          <h2 className="text-2xl font-bold mb-6">Achievements</h2>
          <div className="grid grid-cols-2 gap-4">
            <Achievement icon={<FaStar />} label="First Points" />
            <Achievement icon={<FaStar />} label="Full House" />
            <Achievement icon={<FaFire />} label="Hot Streak" />
            <Achievement icon={<FaTrophy />} label="Centurion" />
            <Achievement icon={<FaFlag />} label="Milestone" />
            <Achievement icon={<FaBullseye />} label="Spot On" />
          </div>
        </section>
      </div>

  );
}

function Achievement({ icon, label }) {
  return (
    <div className="flex flex-col items-center justify-center bg-[#23213a] rounded-lg p-4">
      <span className="text-2xl mb-2 bg-gradient-to-r from-emerald-300 to-sky-500 bg-clip-text text-transparent">{icon}</span>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}