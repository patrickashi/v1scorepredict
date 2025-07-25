
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaTrophy, 
  FaUsers, 
  FaChartBar, 
  FaSearch, 
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import liverpool from '../assets/liverpool.jpeg';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: FaHome },
    { path: '/home', label: 'Home', icon: FaHome },
    { path: '/fixtures_and_predictions', label: 'Fixtures', icon: FaChartBar },
    { path: '/my_leagues', label: 'My Leagues', icon: FaTrophy },
    { path: '/leaderboard', label: 'Leaderboard', icon: FaUsers },
    { path: '/join_league', label: 'Join League', icon: FaUsers },
    { path: '/create_league', label: 'Create League', icon: FaTrophy }
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Mobile Menu Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 
          transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 transition-transform duration-300 ease-in-out
          bg-slate-900/95 backdrop-blur-xl border-r border-white/10
        `}>
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="p-6 border-b border-white/10">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                Fantasy League
              </h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`
                      flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                      ${isActivePath(item.path)
                        ? 'bg-emerald-500/20 text-emerald-400 border-r-2 border-emerald-400'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }
                    `}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* User Settings */}
            <div className="p-4 border-t border-white/10">
              <Link
                to="/profile"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200"
              >
                <FaCog size={18} />
                <span>Settings</span>
              </Link>
              <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-500/20 hover:text-red-400 transition-all duration-200 w-full">
                <FaSignOutAlt size={18} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:ml-0">
          {/* Header */}
          <header className="bg-slate-900/80 backdrop-blur-xl border-b border-white/10 p-4">
            <div className="flex items-center justify-between">
              {/* Mobile menu button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors"
              >
                {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>

              {/* Search Bar */}
              <div className="hidden md:flex flex-1 max-w-md mx-8">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search leagues, players..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                  <FaSearch className="absolute left-3 top-3 text-gray-400" size={14} />
                </div>
              </div>

              {/* Right side: Notifications and User Profile */}
              <div className="flex items-center space-x-4">
                <button className="relative p-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors">
                  <FaBell size={18} />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
                </button>
                
                <Link to="/profile" className="flex items-center space-x-3 hover:bg-white/10 rounded-lg p-2 transition-colors">
                  <div className="relative">
                    <img src={liverpool} alt="Alex R" className="w-9 h-9 rounded-full object-cover ring-2 ring-emerald-400" />
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
                  </div>
                  <span className="font-semibold text-white hidden sm:inline">Alex R</span>
                </Link>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              {children || <Outlet />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
