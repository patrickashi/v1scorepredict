// src/pages/JoinLeague.jsx
import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaArrowRight, FaUsers } from "react-icons/fa";

export default function JoinLeague() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleJoin = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!code.trim()) {
      setError("Please enter a league code.");
      return;
    }
    
    setLoading(true);
    
    // TODO: Call API here to join league with the provided code
    // Example of API interaction:
    // fetch(`/api/leagues/join/`, { 
    //   method: 'POST', 
    //   body: JSON.stringify({ code: code }),
    //   headers: { 'Content-Type': 'application/json' }
    // })
    // .then(res => res.json())
    // .then(data => {
    //   if (data.success) {
    //     // Redirect to the league page
    //     // navigate(`/leagues/${data.league_id}`);
    //   } else {
    //     setError(data.error || "Invalid code or you're already in this league.");
    //   }
    // })
    // .catch(() => setError("A network error occurred. Please try again."))
    // .finally(() => setLoading(false));

    console.log("Attempting to join league with code:", code);
    
    // Simulating an API call for demonstration
    setTimeout(() => {
        if (code.toLowerCase() === 'error') {
            setError("That league code is invalid. Please check and try again.")
        } else {
            alert("Successfully joined league with code: " + code);
            // Here you would typically navigate to the new league's page
        }
        setLoading(false);
    }, 1500);
  };

  return (
    // This component is pure content and will be placed inside your main Layout.
    <div className="flex flex-col items-center justify-center mt-10">
      {/* The main card, using the new 'glassmorphism' style */}
      <div className="w-full max-w-md bg-green-500/80 rounded-2xl p-8 shadow-2xl backdrop-blur-sm border border-white/10">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
              <FaUsers className="text-white text-3xl"/>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white">Join a League</h1>
          <p className="text-brand-gray mt-2">Enter an invite code to join a private league.</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleJoin} className="space-y-6">
          <div>
            <label htmlFor="league-code" className="block text-brand-light font-semibold mb-2">
              Invite Code
            </label>
            <input
              id="league-code"
              type="text"
              className="w-full p-4 bg-black/20 border-2 border-transparent rounded-lg text-white placeholder-brand-gray focus:outline-none focus:border-white/50 transition-colors"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="e.g., ABC123"
              disabled={loading}
            />
          </div>
          
          {/* Error Message Display */}
          {error && (
            <p className="text-red-300 bg-red-500/20 p-3 rounded-lg text-sm text-center">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 font-bold py-4 rounded-lg shadow-lg hover:bg-green-500/80 hover:text-gray-100 cursor-pointer transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Joining..." : "Join League"}
            {!loading && <FaArrowRight />}
          </button>
        </form>
      </div>

      {/* "Back" Link */}
      <div className="mt-6">
        <Link to="/my_leagues" className="text-brand-gray hover:text-white transition-colors">
          &larr; Back to My Leagues
        </Link>
      </div>
    </div>
  );
}