// src/pages/MyLeagues.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaLock, FaTrophy } from 'react-icons/fa';
import Button from '../components/Button';

// --- Reusable Content-Only Components ---

// A styled button for primary actions
const PrimaryButton = ({ to, children }) => (
  <Link 
    to={to}
    className="bg-white text-brand-dark font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition-all transform hover:scale-105"
  >
    {children}
  </Link>
);

// A styled button for secondary actions
const SecondaryButton = ({ to, children }) => (
  <Link 
    to={to}
    className="bg-brand-green/50 text-white font-bold px-4 md:px-6 py-3 rounded-lg border-2 border-brand-green hover:bg-brand-green/80 transition-all transform hover:scale-105"
  >
    {children}
  </Link>
);

// A single league card component
const LeagueCard = ({ title, icon, members, code, players }) => {
  const getRankColor = (rank) => {
    if (rank === 1) return 'text-yellow-400';
    if (rank === 2) return 'text-gray-300';
    if (rank === 3) return 'text-orange-400';
    return 'text-brand-gray';
  };

  return (
    <div className="bg-green-500 rounded-2xl p-6 shadow-lg backdrop-blur-sm border border-white/10 w-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-3">
            {icon} {title}
          </h2>
          <p className="text-sm text-brand-gray">{members} members</p>
        </div>
        {code && (
          <div className="bg-black/20 text-brand-light text-xs font-mono px-3 py-1 rounded-full">
            {code}
          </div>
        )}
      </div>
      <ol className="space-y-3">
        {players.slice(0, 3).map((player, index) => (
          <li key={index} className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-3">
              <span className={`font-bold w-5 text-center ${getRankColor(index + 1)}`}>
                {index + 1}
              </span>
              <span className={`font-semibold ${player.isYou ? 'text-white' : 'text-brand-light'}`}>
                {player.name} {player.isYou && '(You)'}
              </span>
            </div>
            <span className="font-bold text-white">{player.points} pts</span>
          </li>
        ))}
      </ol>
      {players.length > 3 && (
        <div className="text-brand-gray text-xs mt-3">
          + {players.length - 3} more members
        </div>
      )}
    </div>
  );
};


// --- The Main MyLeagues Page Component ---
export default function MyLeagues() {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    // TODO: Replace this with an API call to fetch the user's leagues
    const dummyLeagues = [
      {
        title: "Global League",
        icon: <FaUsers className="text-sky-300" />,
        members: 1248,
        code: null,
        players: [
          { name: "John Doe", points: 85, isYou: true },
          { name: "Jane Smith", points: 82, isYou: false },
          { name: "Mike Johnson", points: 79, isYou: false },
          { name: "Alex Garcia", points: 78, isYou: false },
          { name: "Emma Davis", points: 75, isYou: false },
        ]
      },
      {
        title: "Friends League",
        icon: <FaLock className="text-amber-300" />,
        members: 5,
        code: "ABC123",
        players: [
          { name: "Alex Garcia", points: 48, isYou: false },
          { name: "John Doe", points: 45, isYou: true },
          { name: "Emma Davis", points: 38, isYou: false },
        ]
      }
    ];
    setLeagues(dummyLeagues);
  }, []);

  return (
    // This is a pure content component. The <Layout> in App.jsx provides the frame.
    <div className="space-y-8">
      {/* Page Header and Actions */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white my-6 flex items-center justify-center gap-3">
          <FaTrophy /> My Leagues
        </h1>
        <div className="flex justify-center flex-wrap gap-2 md:gap-4">
          <SecondaryButton to="/create_league">+ Create League</SecondaryButton>
          <SecondaryButton to="/join_league">Join League</SecondaryButton>
        </div>
      </div>
      
      {/* League Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {leagues.map((league, index) => (
          <LeagueCard 
            key={index}
            title={league.title}
            icon={league.icon}
            members={league.members}
            code={league.code}
            players={league.players}
          />
        ))}
      </div>
    </div>
  );
}