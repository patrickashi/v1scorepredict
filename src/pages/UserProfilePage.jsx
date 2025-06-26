// src/pages/UserProfilePage.jsx
import { FaUser, FaSun, FaSignOutAlt } from "react-icons/fa";
import Layout from "../components/Layout";

const gradientText = "bg-gradient-to-r from-emerald-300 to-sky-500 bg-clip-text text-transparent";

export default function UserProfilePage() {
  // Dummy user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    points: 85,
    accuracy: 68,
    predictions: 32,
    exact: 3,
  };

  return (
  
      <div className="flex flex-col items-center justify-center w-full min-h-[80vh] px-2 py-8">
        <div className="w-full max-w-md bg-[#181730] rounded-2xl shadow-lg p-6 md:p-10 flex flex-col items-center">
          {/* App Brand */}
          <div className="flex items-center gap-2 mb-6">
            <span className={`font-bold text-2xl md:text-3xl ${gradientText}`}>VI</span>
            <span className={`font-bold text-2xl md:text-3xl ${gradientText}`}>VI-Predict</span>
          </div>
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-[#23213a] flex items-center justify-center mb-3">
            <FaUser className={`text-4xl ${gradientText}`} />
          </div>
          {/* Name & Email */}
          <div className="text-xl md:text-2xl font-bold mb-1">{user.name}</div>
          <div className="text-sm text-gray-400 mb-6">{user.email}</div>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 w-full mb-8">
            <ProfileStat label="Total Points" value={user.points} />
            <ProfileStat label="Accuracy" value={user.accuracy + "%"} />
            <ProfileStat label="Predictions" value={user.predictions} />
            <ProfileStat label="Exact" value={user.exact} />
          </div>
          {/* Settings */}
          <div className="w-full">
            <div className="font-semibold text-gray-300 mb-2">Settings</div>
            <div className="flex items-center gap-2 bg-[#23213a] rounded-lg px-4 py-3 mb-3">
              <FaSun className={`text-xl ${gradientText}`} />
              <span className="text-gray-200">Light theme</span>
            </div>
            <button className="flex items-center gap-2 bg-[#23213a] rounded-lg px-4 py-3 w-full font-semibold text-gray-200 hover:bg-[#23213a]/80 transition">
              <FaSignOutAlt className={`text-xl ${gradientText}`} />
              Log out
            </button>
          </div>
        </div>
      </div>
   
  );
}

function ProfileStat({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-center bg-[#23213a] rounded-lg p-4 w-full">
      <span className={`font-bold text-lg md:text-xl ${gradientText}`}>{value}</span>
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  );
}