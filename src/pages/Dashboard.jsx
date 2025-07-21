// src/pages/Dashboard.jsx
// *** NOTICE: NO 'import Layout' HERE ***

import { FaTrophy, FaCalculator, FaFutbol, FaFire } from "react-icons/fa";
import { WiSnowflakeCold } from "react-icons/wi";
import { useEffect, useState } from "react";

// --- Reusable Content-Only Components ---
const StatCard = ({ icon, label, value }) => (
  <div className="flex flex-col items-center justify-center bg-green-500 rounded-lg p-4 text-center transition-transform hover:scale-105">
    <span className="text-3xl mb-2 text-green-100">{icon}</span>
    <span className="text-3xl font-bold mb-1 text-white">{value}</span>
    <span className="text-sm text-gray-100 font-semibold">{label}</span>
  </div>
);

// --- The Dashboard Page Component ---
// This is now a simple component that returns ONLY the page's content.
export default function Dashboard() {
  const [stats, setStats] = useState([]);
  const [teams, setTeams] = useState({ hot: [], cold: [] });
  // =========================================================================
  //  API DATA POINT 1: The 'gameweeks' state will hold your table data from the API.
  // =========================================================================
  const [gameweeks, setGameweeks] = useState([]);

  useEffect(() => {
    // =========================================================================
    //  API DATA POINT 2: You will replace this dummy data with a `fetch` call.
    //  The JSON response from your API should be an array of objects.
    // =========================================================================
    const statsData = [ { icon: <FaTrophy />, label: "Total Predictions", value: "100" }, { icon: <FaCalculator />, label: "% Accuracy", value: "65" }, { icon: <FaFutbol />, label: "Correct Scores", value: "9" } ];
    const teamData = { hot: [ { name: "Galactic Strikers", accuracy: "92%" }, { name: "Quantum FC", accuracy: "88%" }, { name: "Phoenix Rising", accuracy: "85%" } ], cold: [ { name: "Alexis FC", accuracy: "85%" }, { name: "Top Boys FC", accuracy: "35%" }, { name: "Slum Queens", accuracy: "30%" } ], };
    
    // This is the data structure your API should return for the table.
    const gameweekData = [
        { id: 20, predictions: 12, correctPredictions: 4, correctScores: 3, accuracy: "40%", points: 65 },
        { id: 19, predictions: 12, correctPredictions: 4, correctScores: 3, accuracy: "40%", points: 65 },
        { id: 18, predictions: 12, correctPredictions: 4, correctScores: 3, accuracy: "40%", points: 65 },
        { id: 17, predictions: 12, correctPredictions: 4, correctScores: 3, accuracy: "40%", points: 65 },
        { id: 16, predictions: 12, correctPredictions: 4, correctScores: 3, accuracy: "40%", points: 65 },
    ];

    setStats(statsData);
    setTeams(teamData);
    setGameweeks(gameweekData);
  }, []);

  return (
    // There is NO <Layout> wrapper here. Just a simple div.
    <div className=" max-w-6xl mx-auto mt-10 w-80 sm:w-120 md:w-full">
      <section className="bg-green-500/80  rounded-xl p-6 mb-8">
        <h1 className="text-lg md:text-2xl font-bold mb-6 text-white">Your Overview</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} icon={stat.icon} label={stat.label} value={stat.value} />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-green-500/80 rounded-xl p-6">
          <h2 className="text:lg md:text-xl font-bold mb-4 flex items-center gap-2"><FaFire className="text-orange-500" /> Your Hot Teams</h2>
          <div className="bg-green-500 rounded-lg p-4 space-y-3">
            {teams.hot.map((team, index) => (
              <div key={index} className="flex justify-between items-center py-1">
                <span className="font-semibold text-gray-200">{team.name}</span>
                <span className="text-white">{team.accuracy}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-green-500/80 rounded-xl p-6">
          <h2 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2"><WiSnowflakeCold className="text-sky-400 text-2xl" /> Your Cold Teams</h2>
            <div className="bg-green-500 rounded-lg p-4 space-y-3">
            {teams.cold.map((team, index) => (
              <div key={index} className="flex justify-between items-center py-1">
                <span className="font-semibold text-gray-200">{team.name}</span>
                <span className="text-white">{team.accuracy}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
       <section className="bg-green-500/80 rounded-xl p-2 mb-10">
          <h2 className="text-lg md:text-2xl font-bold mb-6 text-white">Game Weeks Performance</h2>
          <div className="overflow-x-auto bg-green-500 rounded-lg p-4">
            <table className="w-full text-left min-w-[600px]">
              {/* Table Header: Static content */}
              <thead>
                <tr className="border-b border-green-600">
                  <th className="p-3 text-sm font-semibold text-green-100">Game Week</th>
                  <th className="p-3 text-sm font-semibold text-green-100">Total Predictions</th>
                  <th className="p-3 text-sm font-semibold text-green-100">Correct Predictions</th>
                  <th className="p-3 text-sm font-semibold text-green-100">Correct Scores</th>
                  <th className="p-3 text-sm font-semibold text-green-100">% Accuracy</th>
                  <th className="p-3 text-sm font-semibold text-green-100">Points</th>
                </tr>
              </thead>

              {/* 
              =========================================================================
               API DATA POINT 3: Table Body
               This `tbody` is dynamically generated by mapping over the `gameweeks`
               state. When your API call updates the state, this table will re-render
               automatically with the new data.
              =========================================================================
              */}
              <tbody>
                {gameweeks.map((gw) => (
                  <tr key={gw.id} className="border-b border-green-600/50 last:border-none hover:bg-green-600/50 transition-colors">
                    <td className="p-3 font-semibold text-white">GW {gw.id}</td>
                    <td className="p-3 text-gray-100">{gw.predictions}</td>
                    <td className="p-3 text-gray-100">{gw.correctPredictions}</td>
                    <td className="p-3 text-gray-100">{gw.correctScores}</td>
                    <td className="p-3 text-gray-100">{gw.accuracy}</td>
                    <td className="p-3 font-bold text-white">{gw.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
    </div>
  );
}