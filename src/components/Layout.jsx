// src/components/Layout.jsx
import { FaFutbol, FaTrophy, FaListOl, FaUser, FaBars } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0B2C0E] text-white flex flex-col">
      {/* Top Nav (desktop) */}
      <nav className="hidden md:flex items-center justify-between px-6 py-4 bg-neon.dark">
        <Link to="/dashboard">
          <div className="flex items-center gap-2">
            <FaFutbol className="text-neon text-2xl" />
            <span className="text-neon text-2xl font-bold">VIP PREDICT</span>
          </div>
        </Link>
        <div className="flex gap-8 text-lg">
          {/* <Link to="/home"className="hover:text-neon">Home</Link> */}
          <Link to="/fixtures_and_predictions"className="hover:text-neon">Fixtures</Link>
          <Link to="/my_leagues" className="hover:text-neon">Leagues</Link>
          <Link to="/leaderboard" className="hover:text-neon">Leaderboard</Link>
          <Link to="/profile" className="hover:text-neon">Profile</Link>
        </div>
      </nav>

      {/* Top Nav (mobile) */}
      <nav className="flex md:hidden items-center justify-between 
                      px-6 py-4 
                      bg-neon.dark">
        <Link to="/dashboard">
          <div className="flex items-center gap-2">
            <FaFutbol className="text-neon text-2xl" />
            <span className="text-neon text-2xl font-bold">VIP PREDICT</span>
          </div>
        </Link>
        <FaBars className="text-neon text-2xl" />
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children || <Outlet />}
      </main>

      {/* Bottom Nav (mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0  bg-[#0B2C0E] flex justify-around py-2 z-10">
        <Link to="/fixtures_and_predictions" className="flex flex-col items-center text-sm hover:text-neon">
          <FaFutbol className="text-lg" />Fixtures
        </Link>
        <Link to="/my_leagues" className="flex flex-col items-center text-sm hover:text-neon">
          <FaTrophy className="text-lg" />Leagues
        </Link>
        {/* <Link to="/home" className="flex flex-col items-center text-sm hover:text-neon">
          <FaUser className="text-lg" />Home
        </Link> */}
        <Link to="/leaderboard" className="flex flex-col items-center text-sm hover:text-neon">
          <FaListOl className="text-lg" />Leaderboard
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-sm hover:text-neon">
          <FaUser className="text-lg" />Account
        </Link>
      </nav>
    </div>
  );
}