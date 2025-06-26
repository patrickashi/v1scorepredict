// src/components/Layout.jsx
import { FaFutbol, FaTrophy, FaListOl, FaUser } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0a0920] text-white flex flex-col">
      {/* Top Nav (desktop) */}
      <nav className="hidden md:flex items-center justify-between px-8 py-4 border-b border-[#181730]">
        <Link to="/dashboard">
            <div className="flex items-center gap-2">
                <FaFutbol className="text-emerald-300 text-2xl" />
                <span className="text-emerald-300 text-2xl font-bold">VI-Predict</span>
            </div>
        </Link>
        <div className="flex gap-8 text-lg">
          <Link to="/fixtures_and_predictions" className="hover:text-emerald-300">Fixtures</Link>
          <Link to="/my_leagues" className="hover:text-emerald-300">Leagues</Link>
          <Link to="/leaderboard" className="hover:text-emerald-300">Leaderboard</Link>
          <Link to="/profile" className="hover:text-emerald-300">Profile</Link>
        </div>
      </nav>

      {/* topnav for mobile */}
      <nav className="flex md:hidden items-center justify-center px-8 py-4 border-b border-[#181730]">
        <Link to="/dashboard">
            <div className="flex items-center gap-2">
                <FaFutbol className="text-emerald-300 text-2xl" />
                <span className="text-emerald-300 text-2xl font-bold">VI-Predict</span>
            </div>
        </Link>
        
      </nav>


      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center w-full">
        {/* Use children if you wrap routes, or <Outlet /> if using nested routes */}
        {children || <Outlet />}
      </main>
      {/* Bottom Nav (mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#181730] border-t border-[#23213a] flex justify-around py-2 z-10">
        <Link to="/fixtures_and_predictions" className="flex flex-col items-center text-xs hover:text-emerald-400">
          <FaFutbol className="text-lg" />Fixtures
        </Link>
        <Link to="/my_leagues" className="flex flex-col items-center text-xs hover:text-emerald-400">
          <FaTrophy className="text-lg" />Leagues
        </Link>
        <Link to="/leaderboard" className="flex flex-col items-center text-xs hover:text-emerald-400">
          <FaListOl className="text-lg" />Leaderboard
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-xs hover:text-emerald-400">
          <FaUser className="text-lg" />Profile
        </Link>
      </nav>
    </div>
  );
}