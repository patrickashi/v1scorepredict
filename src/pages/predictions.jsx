// pages/predictions.jsx
import { useState } from "react";

export default function Predictions() {
  // TODO: Call API here to fetch predictions/results
  const [gameweek, setGameweek] = useState(5);
  const matches = [
    {
      date: "Saturday, 1 September · 15:00",
      home: "CHE",
      away: "BHA",
      homeLogo: "/che.png",
      awayLogo: "/bha.png",
      prediction: "0-0",
      result: null,
      points: null,
    },
    {
      date: "Sunday, 2 September · 16:30",
      home: "MCI",
      away: "LIV",
      homeLogo: "/mci.png",
      awayLogo: "/liv.png",
      prediction: "2-1",
      result: "2-1",
      points: 20,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0920] text-white px-4 py-8">
      <header className="flex flex-col items-center mb-8">
        <div className="flex items-center mb-2">
          <span className="text-yellow-400 text-3xl font-bold mr-2">VI</span>
          <span className="text-yellow-400 text-2xl font-bold">VI-Predict</span>
        </div>
        <nav className="flex gap-8 mb-4">
          <a href="#" className="text-white hover:text-yellow-400">Fixtures</a>
          <select className="bg-[#181730] text-white px-4 py-2 rounded">
            <option>Gameweek {gameweek}</option>
          </select>
          <a href="#" className="text-white hover:text-yellow-400">Leagues</a>
          <a href="#" className="text-white hover:text-yellow-400">Profile</a>
        </nav>
        <h1 className="text-3xl font-bold mb-4">Premier League Predictions</h1>
      </header>
      <div className="flex flex-col items-center">
        <div className="bg-[#181730] rounded-xl p-6 w-full max-w-xl">
          <div className="mb-6">
            <select className="bg-[#23213a] text-white px-4 py-2 rounded">
              <option>Gameweek {gameweek}</option>
            </select>
          </div>
          {matches.map((match, idx) => (
            <div key={idx} className="mb-8">
              <div className="text-gray-400 mb-2">{match.date}</div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col items-center">
                  <img src={match.homeLogo} alt={match.home} className="w-10 h-10 mb-1" />
                  <span className="font-bold">{match.home}</span>
                </div>
                <div className="flex items-center gap-2 text-2xl font-bold">
                  {match.prediction}
                </div>
                <div className="flex flex-col items-center">
                  <img src={match.awayLogo} alt={match.away} className="w-10 h-10 mb-1" />
                  <span className="font-bold">{match.away}</span>
                </div>
              </div>
              {match.result && (
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-400">Actual Result</span>
                  <span className="font-bold">{match.result}</span>
                  {match.points && (
                    <span className="bg-green-700 text-white px-3 py-1 rounded-lg font-semibold">{match.points} pts</span>
                  )}
                </div>
              )}
              {!match.result && (
                <div className="text-center text-gray-400">Enter your prediction</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}