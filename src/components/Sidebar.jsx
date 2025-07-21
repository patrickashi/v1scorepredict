// src/components/Sidebar.jsx

// STEP 1: Import NavLink instead of just Link for dynamic active styling
import { NavLink, Link } from 'react-router-dom';
import { FaHome, FaShieldAlt, FaCalendarAlt, FaQuestionCircle, FaCog, FaSignOutAlt, FaFutbol, FaTimes } from "react-icons/fa";

/**
 * This is the new navigation link component.
 * It uses NavLink to automatically determine if the link is active.
 * The 'className' prop accepts a function to apply styles conditionally.
 */
const SidebarNavLink = ({ to, icon, text }) => (
  <NavLink
    to={to}
    // The `isActive` boolean is provided automatically by NavLink
    className={({ isActive }) =>
      `flex items-center space-x-4 px-6 py-3 rounded-lg transition-all duration-200 font-semibold ${
        isActive
          // ACTIVE STYLE: High-contrast white background with green text and a shadow.
          ? "bg-white text-green-700 shadow-lg"
          // INACTIVE STYLE: White text on transparent background, with a subtle hover effect.
          : "text-gray-100 hover:bg-white/20"
      }`
    }
  >
    {icon}
    <span>{text}</span>
  </NavLink>
);

export default function Sidebar({ isOpen, toggleSidebar }) {
  // The overall structure and styles of the sidebar are maintained as you requested.
  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-green-900/60 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* The Sidebar */}
      <aside
        // Using a slightly darker, more solid green for the sidebar to make the active link pop.
        className={`fixed top-0 left-0 h-full w-64 bg-green-500/80 text-white flex flex-col p-6 z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo and Mobile Close Button */}
        <div className="flex items-center justify-between mb-10">
          <Link to="/dashboard" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FaFutbol className="text-green-700 text-2xl" />
            </div>
            <span className="text-2xl font-bold">VI-Predict</span>
          </Link>
          <button onClick={toggleSidebar} className="lg:hidden text-green-100 hover:text-white">
            <FaTimes size={24} />
          </button>
        </div>

        {/* 
          STEP 2: Use the new SidebarNavLink component.
          No more 'active' prop is needed. It's now automatic.
        */}
        <nav className="flex-grow flex flex-col space-y-2">
          <SidebarNavLink to="/dashboard" icon={<FaHome size={20} />} text="Home" />
          <SidebarNavLink to="/my_leagues" icon={<FaShieldAlt size={20} />} text="Leagues" />
          <SidebarNavLink to="/gameweeks" icon={<FaCalendarAlt size={20} />} text="Game Weeks" />
        </nav>

        {/* Bottom Section */}
        <div className="flex flex-col space-y-2">
          <SidebarNavLink to="/help" icon={<FaQuestionCircle size={20} />} text="Help" />
          <SidebarNavLink to="/settings" icon={<FaCog size={20} />} text="Settings" />
          <Link
            to="/login"
            className="flex items-center space-x-4 px-6 py-3 rounded-lg text-red-300 hover:bg-red-500/30 hover:text-red-100 transition-colors font-semibold"
          >
            <FaSignOutAlt size={20} />
            <span>Log Out</span>
          </Link>
        </div>
      </aside>
    </>
  );
}