// src/pages/UserProfilePage.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUser, FaSignOutAlt, FaShieldAlt, FaEdit, FaTrophy, 
  FaChartBar, FaBullseye, FaBrain 
} from "react-icons/fa";
import liverpool from '../assets/liverpool.jpeg'; // Make sure this path is correct

// --- Reusable Content-Only Components ---
const ProfileStat = ({ icon, label, value }) => (
  <div className="bg-black/20 rounded-lg p-4 text-center">
    <div className="text-2xl text-brand-light mb-1">{icon}</div>
    <div className="text-xl font-bold text-white">{value}</div>
    <div className="text-xs text-brand-gray">{label}</div>
  </div>
);

// --- The Main UserProfilePage Component ---
export default function UserProfilePage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // TODO: Replace this with an API call to fetch the logged-in user's data
    const dummyUser = {
      name: "Alex R.",
      email: "alex.r@example.com",
      avatar: liverpool, // The imported image
      stats: {
        totalPoints: 1200,
        accuracy: "65%",
        predictions: 100,
        exactScores: 9,
      }
    };
    setUser(dummyUser);
  }, []);

  // Render a loading state while user data is being fetched
  if (!user.stats) {
    return <div className="text-center text-brand-gray p-10">Loading Profile...</div>;
  }

  return (
    // This is a pure content component. The <Layout> in App.jsx provides the frame.
    <div className="flex flex-col items-center justify-start w-full">
      <div className="w-full max-w-xl mt-10 mb-10">
        {/* Main Profile Card */}
        <div className="bg-green-500 rounded-2xl p-6 shadow-2xl backdrop-blur-sm border border-white/10 text-center">
          
          {/* Avatar and Edit Button */}
          <div className="relative w-24 h-24 mx-auto mb-4">
            <img 
              src={user.avatar}
              alt="User Avatar"
              className="w-full h-full rounded-full object-cover border-4 border-white/20"
            />
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-white text-brand-dark rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
              <FaEdit />
            </button>
          </div>

          {/* User Info */}
          <h1 className="text-2xl font-bold text-white">{user.name}</h1>
          <p className="text-brand-gray mb-6">{user.email}</p>

          {/* User Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <ProfileStat icon={<FaTrophy />} label="Total Points" value={user.stats.totalPoints} />
            <ProfileStat icon={<FaChartBar />} label="Accuracy" value={user.stats.accuracy} />
            <ProfileStat icon={<FaBrain />} label="Predictions" value={user.stats.predictions} />
            <ProfileStat icon={<FaBullseye />} label="Exact Scores" value={user.stats.exactScores} />
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link to="/settings" className="w-full flex items-center justify-center gap-3 bg-black/20 text-brand-light font-semibold py-3 rounded-lg hover:bg-black/30 transition-colors">
              <FaShieldAlt />
              <span>Account & Security</span>
            </Link>
            <button className="w-full flex items-center justify-center gap-3 bg-red-500/20 text-red-300 font-semibold py-3 rounded-lg hover:bg-red-500/40 transition-colors">
              <FaSignOutAlt />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}