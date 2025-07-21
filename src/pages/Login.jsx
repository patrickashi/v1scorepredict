// src/pages/Login.jsx
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Removed FaGoogle
import soccer_players1 from "../assets/soccer_players1.png";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Regular login with Django backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!form.email || !form.password) {
      setError("Please fill all fields.");
      setLoading(false);
      return;
    }

    try {
      // TODO: Replace with actual Django API endpoint
      const response = await fetch('/api/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // TODO: Handle successful login (store token, redirect)
        alert("Login successful!");
        // Example: localStorage.setItem('authToken', data.token);
        //          navigate('/dashboard');
      } else {
        if (data.errors) {
          setError(Object.values(data.errors).flat().join(', '));
        } else {
          setError(data.message || "Login failed. Please check your credentials.");
        }
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  // REMOVED: The handleGoogleSignIn function is no longer needed.

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
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

        {/* Login Form */}
        <div className="w-full max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-8 text-center md:text-start">Sign in</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
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

            {error && (
              <div className="text-red-200 text-sm bg-red-500/20 p-3 rounded-lg text-center">
                {error}
              </div>
            )}

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-green-600 font-semibold py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            {/* REMOVED: "Or" Divider and Google Sign In button */}

            {/* Footer Links */}
            <div className="text-center space-y-2 pt-4">
              <div className="text-white/80 text-sm">
                <a href="/forgot-password" className="text-white underline hover:text-white/80">
                  Forgot your password?
                </a>
              </div>
              <div className="text-white/80 text-sm">
                No account? <a href="/register" className="text-white underline font-semibold">Join now</a>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Promotional Content (Unchanged) */}
      <div className="hidden lg:flex w-1/2 bg-gray-900 flex-col items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
        <div className="relative z-10 text-center max-w-md">
          <h2 className="text-4xl font-bold text-white mb-6">Your Throne Awaits</h2>
          <div className="mb-8 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={soccer_players1}
                alt="Soccer players competing"
                className="w-full h-64 object-cover"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
              />
              <div className="bg-gradient-to-r from-red-600 to-blue-600 p-8 shadow-2xl hidden">{/* Fallback */}</div>
            </div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Gear up, Manager! You've just stepped into the ultimate fantasy battleground. Assemble your dream squad, outsmart rivals, and claim glory. Every transfer, every gamble, every scream-at-the-screen moment starts here.
          </p>
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