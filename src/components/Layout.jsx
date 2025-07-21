// src/components/Layout.jsx
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBars, FaSearch } from "react-icons/fa";
import Sidebar from './Sidebar';
import liverpool from '../assets/liverpool.jpeg'; // Make sure this path is correct

export default function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-[#212121] text-gray-200 min-h-screen flex">
      {/* The Sidebar component is responsible for the left-side navigation */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area (takes up the rest of the screen) */}
      <div className="flex-1 flex flex-col lg:ml-64">
        
        {/* THIS IS THE ONLY HEADER FOR THE ENTIRE APP */}
        <header className="bg-green-500/80 backdrop-blur-sm sticky top-0 z-20 p-4 lg:p-6 flex items-center justify-between">
          
          {/* Left side: Hamburger menu (mobile) and top links (desktop) */}
          <div className="flex items-center space-x-6">
            <button onClick={toggleSidebar} className="text-gray-100 hover:text-white lg:hidden">
              <FaBars size={24} />
            </button>
            <nav className="hidden md:flex items-center space-x-6 text-gray-100 text-sm font-semibold">
              <Link to="/fixtures_and_predictions" className="hover:text-white transition-colors">Fixtures</Link>
              <Link to="/leaderboard" className="hover:text-white transition-colors">Leaderboard</Link>
              <Link to="/prediction" className="hover:text-white transition-colors">Prediction</Link>
              <Link to="/results" className="hover:text-white transition-colors">Results</Link>
            </nav>
          </div>

          {/* Right side: Search and User Profile */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-100 hover:text-white p-2 rounded-full hover:bg-gray-700/50 transition-colors">
              <FaSearch size={18} />
            </button>
            <Link to="/profile" className="flex items-center space-x-3">
              <div className="relative">
                <img src={liverpool} alt="User Avatar" className="w-9 h-9 rounded-full object-cover" />
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-[#212121]"></span>
              </div>
              <span className="font-semibold hidden sm:inline">Alex. R</span>
            </Link>
          </div>
        </header>

        {/* This is where your page content (like the Dashboard) will be rendered */}
        <main className="flex-1 p-4 sm:p-6 lg:p-2 overflow-y-auto">
          {children || <Outlet />}
        </main>

      </div>
    </div>
  );
}