// components/Navbar.jsx
import { FaFutbol, FaTrophy, FaListOl, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-emerald-700 text-white flex justify-around py-2 md:hidden z-10">
        <a href="/dashboard" className="flex flex-col items-center"><FaFutbol /><span className="text-xs">Fixtures</span></a>
        <a href="/leagues" className="flex flex-col items-center"><FaTrophy /><span className="text-xs">Leagues</span></a>
        <a href="/leaderboard" className="flex flex-col items-center"><FaListOl /><span className="text-xs">Leaderboard</span></a>
        <a href="/profile" className="flex flex-col items-center"><FaUser /><span className="text-xs">Profile</span></a>
      </nav>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-gray-900 text-white min-h-screen p-6">
        <div className="text-2xl font-bold mb-8 flex items-center gap-2">
          <FaFutbol className="text-emerald-300" /> V1ScorePredict
        </div>
        <nav className="flex flex-col gap-4">
          <a href="/dashboard" className="flex items-center gap-2"><FaFutbol /> Fixtures</a>
          <a href="/leagues" className="flex items-center gap-2"><FaTrophy /> Leagues</a>
          <a href="/leaderboard" className="flex items-center gap-2"><FaListOl /> Leaderboard</a>
          <a href="/profile" className="flex items-center gap-2"><FaUser /> Profile</a>
        </nav>
      </aside>
    </>
  );
}