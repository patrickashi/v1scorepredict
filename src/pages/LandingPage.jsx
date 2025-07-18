import soccer_players1 from "../assets/soccer_players1.png";
import { FaTrophy, FaBullseye, FaChartBar, FaFacebookF, FaInstagram, FaTimes } from "react-icons/fa";
import NavbarLandingPage from "../components/NavbarLandingPage";

export default function LandingPage() {
  // TODO: Fetch features or stats from Django API here if needed in the future

  return (
    <div className="min-h-screen bg-[#222] flex flex-col">
      <NavbarLandingPage />
      {/* Hero Section */}
      <section id="home" className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-2 md:mx-8 mt-4 p-4 md:p-12 shadow-lg relative overflow-hidden">
        {/* Soccer Image */}
        <div className="flex-1 flex justify-center items-center mb-8 lg:mb-0">
          <div className="rounded-full overflow-hidden shadow-2xl w-64 h-64 md:w-96 md:h-96 flex items-center justify-center bg-black/20">
            <img
              src={soccer_players1}
              alt="Soccer players"
              className="object-cover w-full h-full"
            />
            <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold bg-black/40 px-4 py-1 rounded-full">English Top Flight</span>
          </div>
        </div>
        {/* Hero Text */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left px-2">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">How Do You Know The Beautiful Game?</h1>
          <p className="text-white/90 text-lg md:text-xl mb-6 max-w-md">
            Go head-to-head with friends and players worldwide in weekly football challenges.
          </p>
          <a
            href="/register"
            className="bg-gray-900 text-green-400 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition mb-4"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full max-w-6xl mx-auto mt-12 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white/20 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:bg-white/30 transition">
            <FaTrophy className="text-yellow-400 text-4xl mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">Compete in Public and Private Leagues</h3>
            <p className="text-white/80 mb-4">Create League With Friends</p>
            <a href="/leagues" className="text-green-200 font-semibold hover:underline">Start a League &rarr;</a>
          </div>
          {/* Feature 2 */}
          <div className="bg-white/20 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:bg-white/30 transition">
            <FaBullseye className="text-green-300 text-4xl mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">Go Big With Your Banker Pick</h3>
            <p className="text-white/80 mb-4">Guess Match Outcomes</p>
            <a href="/predictions" className="text-green-200 font-semibold hover:underline">Try a Prediction &rarr;</a>
          </div>
          {/* Feature 3 */}
          <div className="bg-white/20 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:bg-white/30 transition">
            <FaChartBar className="text-blue-300 text-4xl mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">Boost Your Game With Personal Analytics</h3>
            <p className="text-white/80 mb-4">Gain Rank in Real Time</p>
            <a href="/leaderboard" className="text-green-200 font-semibold hover:underline">View Top Players &rarr;</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 bg-gradient-to-br from-green-500 to-green-600 rounded-t-2xl px-4 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start">
          {/* Logo and Mission */}
          <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <span className="text-white text-2xl font-bold">VI-Predict</span>
            </div>
            <p className="text-white/80 text-sm max-w-xs text-center md:text-left">
              "To make every match, race, or game more thrilling by turning predictions into competitions. We believe anyone can be a prophet... if they've got the guts to back their guesses!"
            </p>
            {/* Socials */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/50 transition"><FaFacebookF /></a>
              <a href="#" className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/50 transition"><FaTimes /></a>
              <a href="#" className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/50 transition"><FaInstagram /></a>
            </div>
          </div>
          {/* Footer Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 text-white/90 text-sm">
            <div>
              <h4 className="font-bold mb-2">Company</h4>
              <ul>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                <li><a href="#" className="hover:underline">Terms And Conditions</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">About us</h4>
              <ul>
                <li><a href="#" className="hover:underline">How it works</a></li>
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">Why choose us?</a></li>
                <li><a href="#" className="hover:underline">About us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Community</h4>
              <ul>
                <li><a href="#" className="hover:underline">Events</a></li>
                <li><a href="#" className="hover:underline">Invite a Friend</a></li>
                <li><a href="#" className="hover:underline">Podcast</a></li>
                <li><a href="#" className="hover:underline">Articles</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/30 mt-8 pt-4 text-center text-white/70 text-xs">
          Copyright &copy; 2025. VI-Predict. All rights reserved.
        </div>
      </footer>
    </div>
  );
}