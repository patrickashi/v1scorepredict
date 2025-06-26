// pages/dashboard.jsx
import Layout from "../components/Layout";
import { FaUser, FaTrophy, FaCalendarAlt, FaFutbol } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Dashboard() {
  // Dummy data
  const [stats, setStats] = useState({
    users: 1248,
    leagues: 56,
    gameweeks: 38,
    matches: 380,
  });
  const [users, setUsers] = useState([]);
  const [gameweeks, setGameweeks] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // TODO: Replace with API calls
    setUsers([
      { name: "John Doe", email: "john@example.com" },
      { name: "Emily Smith", email: "emily@example.com" },
    ]);
    setGameweeks([
      { id: 1, status: "In Progress" },
      { id: 2, status: "Upcoming" },
    ]);
    setMatches([
      {
        date: "Aug 15, 2023",
        home: "MUN",
        score: "3 - 1",
        away: "EVE",
        status: "Finished",
      },
    ]);
  }, []);

  return (
      <div className="w-full max-w-6xl mx-auto py-8">
        {/* <h1 className="text-3xl font-bold mb-8 text-center">Dashboard</h1> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard icon={<FaUser className="text-2xl" />} label="Users" value={stats.users} />
          <StatCard icon={<FaTrophy className="text-2xl" />} label="Leagues" value={stats.leagues} />
          <StatCard icon={<FaCalendarAlt className="text-2xl" />} label="Gameweeks" value={stats.gameweeks} />
          <StatCard icon={<FaFutbol className="text-2xl" />} label="Matches" value={stats.matches} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-[#181730] rounded-xl p-6">
            <h2 className="font-semibold mb-4">Users</h2>
            {users.map((user, idx) => (
              <div key={idx} className="mb-2">
                <span className="font-bold">{user.name}</span>
                <span className="text-xs text-gray-400 ml-2">{user.email}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#181730] rounded-xl p-6">
            <h2 className="font-semibold mb-4">Gameweeks</h2>
            {gameweeks.map((gw) => (
              <div key={gw.id} className="mb-2">
                <span className="font-bold">Gameweek {gw.id}</span>
                <span className="ml-2 bg-emerald-600 text-xs px-2 py-1 rounded">{gw.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#181730] rounded-xl p-6">
          <h2 className="font-semibold mb-4">Gameweek Matches</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400">
                <th className="py-2">Date</th>
                <th>Home Team</th>
                <th>Score</th>
                <th>Away Team</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((m, idx) => (
                <tr key={idx} className="border-t border-[#23213a]">
                  <td className="py-2">{m.date}</td>
                  <td>{m.home}</td>
                  <td>{m.score}</td>
                  <td>{m.away}</td>
                  <td>{m.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

  );
}

// StatCard component for dashboard stats
function StatCard({ icon, label, value }) {
  return (
    <div className="bg-[#181730] rounded-xl flex flex-col items-center justify-center py-8">
      <div className="mb-2 text-emerald-300">{icon}</div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
}