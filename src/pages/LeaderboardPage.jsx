// src/pages/LeaderboardPage.jsx
import { useState, useEffect } from 'react';
import { 
  FaTrophy, FaStar, FaFire, FaBullseye, FaFlag, FaGlobeAmericas 
} from "react-icons/fa";

// --- Reusable Content-Only Components ---

// Component for a single player row in the leaderboard
const LeaderboardRow = ({ rank, name, points, isYou }) => {
  const getRankColor = (rank) => {
    if (rank === 1) return 'text-yellow-400';
    if (rank === 2) return 'text-gray-300';
    if (rank === 3) return 'text-orange-400';
    return 'text-brand-gray';
  };

  return (
    <li 
      className={`flex justify-between items-center p-3 rounded-lg transition-colors ${isYou ? 'bg-white/10' : 'hover:bg-white/5'}`}
    >
      <div className="flex items-center gap-4">
        <span className={`font-bold w-6 text-center text-lg ${getRankColor(rank)}`}>
          {rank}
        </span>
        <span className={`font-semibold ${isYou ? 'text-white' : 'text-brand-light'}`}>
          {name} {isYou && '(You)'}
        </span>
      </div>
      <span className="font-bold text-white">{points} pts</span>
    </li>
  );
};

// Component for a single achievement badge
const AchievementCard = ({ icon, label, unlocked }) => (
  <div 
    className={`flex flex-col items-center justify-center text-center p-4 rounded-xl transition-all ${
      unlocked 
        ? 'bg-black/20 text-brand-light' 
        : 'bg-black/30 text-brand-gray opacity-60'
    }`}
  >
    <div className={`text-3xl mb-1 ${unlocked ? 'text-yellow-400' : ''}`}>
      {icon}
    </div>
    <span className="text-xs font-semibold">{label}</span>
  </div>
);


// --- The Main LeaderboardPage Component ---
export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    // TODO: Replace this with an API call to fetch leaderboard and achievements data
    const dummyLeaderboard = [
      { name: "Sarah Connor", points: 92, isYou: false },
      { name: "John Doe", points: 85, isYou: true },
      { name: "Jane Smith", points: 82, isYou: false },
      { name: "Mike Johnson", points: 79, isYou: false },
      { name: "Alex Garcia", points: 78, isYou: false },
    ];
    const dummyAchievements = [
      { icon: <FaStar />, label: "First Points", unlocked: true },
      { icon: <FaBullseye />, label: "Spot On", unlocked: true },
      { icon: <FaFire />, label: "Hot Streak", unlocked: true },
      { icon: <FaTrophy />, label: "Centurion", unlocked: false },
      { icon: <FaFlag />, label: "Milestone", unlocked: false },
      { icon: <FaStar />, label: "Full House", unlocked: false },
    ];
    setLeaderboard(dummyLeaderboard);
    setAchievements(dummyAchievements);
  }, []);

  return (
    // This component is pure content, designed to fit inside your main Layout.
    <div className="flex flex-col lg:flex-row gap-2 items-start">
      
      {/* Leaderboard Section (Main Content) */}
      <section className="flex-grow w-full h-screen bg-green-500/80 p-6 shadow-lg backdrop-blur-sm border border-white/10">
        <h1 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <FaGlobeAmericas /> Global Leaderboard
        </h1>
        <ol className="space-y-2">
          {leaderboard.map((user, index) => (
            <LeaderboardRow
              key={user.name}
              rank={index + 1}
              name={user.name}
              points={user.points}
              isYou={user.isYou}
            />
          ))}
        </ol>
      </section>

      {/* Achievements Section (Sidebar-like) */}
      <aside className="w-full lg:w-80 lg:flex-shrink-0 bg-green-500/80 p-6 shadow-lg backdrop-blur-sm border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-4">Achievements</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-2 gap-4">
          {achievements.map((ach, index) => (
            <AchievementCard 
              key={index}
              icon={ach.icon}
              label={ach.label}
              unlocked={ach.unlocked}
            />
          ))}
        </div>
      </aside>

    </div>
  );
}