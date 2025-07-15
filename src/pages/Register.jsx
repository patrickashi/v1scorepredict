import { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import soccer_players1 from "../assets/soccer_players1.png";

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [subscribeEmails, setSubscribeEmails] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      setError("Please fill all required fields.");
      return;
    }
    if (!agreeTerms) {
      setError("Please agree to the Terms and Conditions.");
      return;
    }
    setError("");
    alert("Register: " + JSON.stringify(form));
  };

  const handleGoogleSignUp = () => {
    alert("Google Sign Up clicked");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Register Form */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-green-500 to-green-600 flex flex-col items-center justify-center p-8">
        {/* Logo */}
        <div className="absolute top-8 left-8 flex items-center">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
          <span className="text-white text-xl font-bold">VI-Predict</span>
        </div>

        {/* Register Form */}
        <div className="w-full max-w-md">
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-16 mb-8">Create account</h1>
          
          <div className="space-y-6">
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
              />
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
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm mb-2">First Name</label>
                <input
                  className="w-full p-4 bg-transparent border-2 border-white/30 rounded-lg outline-none text-white placeholder-white/70 focus:border-white transition-colors"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Last Name</label>
                <input
                  className="w-full p-4 bg-transparent border-2 border-white/30 rounded-lg outline-none text-white placeholder-white/70 focus:border-white transition-colors"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 text-green-600 bg-transparent border-2 border-white/30 rounded focus:ring-green-500 focus:ring-2"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                <label htmlFor="terms" className="text-white text-sm">
                  I have read and agree to the <span className="underline">Terms and Conditions</span>
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="emails"
                  className="mt-1 w-4 h-4 text-green-600 bg-transparent border-2 border-white/30 rounded focus:ring-green-500 focus:ring-2"
                  checked={subscribeEmails}
                  onChange={(e) => setSubscribeEmails(e.target.checked)}
                />
                <label htmlFor="emails" className="text-white text-sm">
                  I would like to receive emails from VI-Predict, which include Matchday, Leaderboard, Site Banter and Important announcement.
                </label>
              </div>
            </div>

            {error && (
              <div className="text-red-200 text-sm bg-red-500/20 p-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Create Account Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-white text-green-600 font-semibold py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
            >
              Create account
            </button>

            {/* Footer Links */}
            <div className="text-center mt-2">
              <div className="text-white/80 text-sm">
                Already have an account? <a href="/" className="text-white underline font-semibold">Sign in</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Promotional Content */}
      <div className="hidden lg:flex w-1/2 bg-gray-900 flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-md">
          <h2 className="text-4xl font-bold text-white mb-6">Your Throne Awaits</h2>
          
          {/* Soccer Image */}
          <div className="mb-8 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={soccer_players1} 
                alt="Soccer players competing"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  // Fallback to mock design if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              {/* Fallback mock design */}
              <div className="bg-gradient-to-r from-red-600 to-blue-600 p-8 shadow-2xl hidden">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">P1</span>
                    </div>
                  </div>
                  <div className="text-white font-bold text-lg">VS</div>
                  <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">P2</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 h-2 bg-green-500 rounded-full relative">
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Gear up, Manager! You've just stepped into the ultimate fantasy battleground. Assemble your dream squad, outsmart rivals, and claim glory. Every transfer, every gamble, every scream-at-the-screen moment starts here.
          </p>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/30 rounded-full"></div>
            <div className="w-3 h-3 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}