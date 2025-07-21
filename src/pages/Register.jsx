// src/pages/Register.jsx
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import soccer_players1 from "../assets/soccer_players1.png";

export default function Register() {
  // --- STATE MANAGEMENT ---
  // Added 'favouriteClub' to the form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    favouriteClub: "", // New state for the dropdown
  });

  const [clubs, setClubs] = useState([]); // State to hold the list of clubs
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  // --- DATA FETCHING for Clubs ---
  useEffect(() => {
    // TODO: Replace this with an API call to fetch clubs from your Django backend
    // fetch('/api/clubs/')
    //   .then(res => res.json())
    //   .then(data => setClubs(data));

    // Using dummy data for now
    const dummyClubs = [
      "Arsenal", "Aston Villa", "Bournemouth", "Brentford", "Brighton", 
      "Chelsea", "Crystal Palace", "Everton", "Fulham", "Ipswich Town", 
      "Leicester City", "Liverpool", "Manchester City", "Manchester United", 
      "Newcastle United", "Nottingham Forest", "Southampton", "Tottenham Hotspur", 
      "West Ham United", "Wolverhampton Wanderers"
    ];
    setClubs(dummyClubs);
  }, []);


  // --- FORM SUBMISSION ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Updated validation to include favouriteClub
    if (!form.firstName || !form.lastName || !form.email || !form.password || !form.favouriteClub) {
      setError("Please fill all required fields, including your favourite club.");
      setLoading(false);
      return;
    }
    if (!agreeTerms) {
      setError("Please agree to the Terms and Conditions.");
      setLoading(false);
      return;
    }

    try {
      // TODO: Replace with actual Django API endpoint
      const response = await fetch('/api/auth/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Added 'favourite_club' to the request body
        body: JSON.stringify({
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          password: form.password,
          favourite_club: form.favouriteClub,
          agree_terms: agreeTerms,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful! Please check your email for verification.");
      } else {
        if (data.errors) {
          setError(Object.values(data.errors).flat().join(', '));
        } else {
          setError(data.message || "Registration failed. Please try again.");
        }
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Register Form */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-green-500 to-green-600 flex flex-col items-center justify-center p-8 overflow-y-auto">
        {/* Logo */}
        <div className="w-full max-w-md">
            <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                </div>
                <span className="text-white text-xl font-bold">VI-Predict</span>
            </div>
        </div>

        {/* Register Form */}
        <div className="w-full max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center md:text-start">Create account</h1>
          
          <form onSubmit={handleSubmit} className="space-y-5">
             {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm mb-2">First Name</label>
                <input
                  className="w-full p-4 bg-transparent border-2 border-white/30 rounded-lg outline-none text-white placeholder-white/70 focus:border-white transition-colors"
                  type="text"
                  name="firstName"
                  placeholder="Yemisi"
                  value={form.firstName}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Last Name</label>
                <input
                  className="w-full p-4 bg-transparent border-2 border-white/30 rounded-lg outline-none text-white placeholder-white/70 focus:border-white transition-colors"
                  type="text"
                  name="lastName"
                  placeholder="Ojo"
                  value={form.lastName}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-white text-sm mb-2">Email address</label>
              <input
                className="w-full p-4 bg-transparent border-2 border-white/30 rounded-lg outline-none text-white placeholder-white/70 focus:border-white transition-colors"
                type="email"
                name="email"
                placeholder="yemisiojo@gmail.com"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
                required
              />
            </div>
            
            {/* NEW: Favourite Club Dropdown */}
            <div>
              <label className="block text-white text-sm mb-2">Favourite Club</label>
              <select
                name="favouriteClub"
                value={form.favouriteClub}
                onChange={handleChange}
                disabled={loading}
                required
                className="w-full p-4 bg-transparent border-2 border-white/30 rounded-lg outline-none text-white placeholder-white/70 focus:border-white transition-colors appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                }}
              >
                <option value="" disabled className="text-black">Select your club</option>
                {clubs.map(club => (
                  <option key={club} value={club} className="text-black">{club}</option>
                ))}
              </select>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-white text-sm mb-2">Password</label>
              <div className="relative">
                <input
                  className="w-full p-4 bg-transparent border-2 border-white/30 rounded-lg outline-none text-white placeholder-white/70 focus:border-white transition-colors pr-12"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••••"
                  value={form.password}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start space-x-3 pt-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                disabled={loading}
                required
              />
              <label htmlFor="terms" className="text-white text-sm">
                I have read and agree to the <a href="/terms" className="underline font-semibold">Terms and Conditions</a>
              </label>
            </div>

            {error && (
              <div className="text-red-200 text-sm bg-red-500/20 p-3 rounded-lg text-center">
                {error}
              </div>
            )}

            {/* Create Account Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-green-600 font-semibold py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
            
            {/* REMOVED: Google Sign Up and 'Or' divider */}

            {/* Footer Links */}
            <div className="text-center pt-2">
              <div className="text-white/80 text-sm">
                Already have an account? <a href="/login" className="text-white underline font-semibold">Sign in</a>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Promotional Content (Unchanged) */}
      <div className="hidden lg:flex w-1/2 bg-gray-900 flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* ... (rest of the promotional content remains the same) ... */}
         <div className="relative z-10 text-center max-w-md">
          <h2 className="text-4xl font-bold text-white mb-6">Your Throne Awaits</h2>
          <div className="mb-8 relative"><div className="rounded-2xl overflow-hidden shadow-2xl"><img src={soccer_players1} alt="Soccer players competing" className="w-full h-64 object-cover"/></div></div>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">Gear up, Manager! You've just stepped into the ultimate fantasy battleground. Assemble your dream squad, outsmart rivals, and claim glory. Every transfer, every gamble, every scream-at-the-screen moment starts here.</p>
          <div className="flex justify-center space-x-2"><div className="w-3 h-3 bg-white rounded-full"></div><div className="w-3 h-3 bg-white/30 rounded-full"></div><div className="w-3 h-3 bg-white/30 rounded-full"></div></div>
        </div>
      </div>
    </div>
  );
}