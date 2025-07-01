import { useState } from "react";

export default function FixturesAndPredictions() {
  // TODO: Call API here to fetch fixtures and predictions
  const [predictions, setPredictions] = useState({ 1: [0, 0], 2: [0, 0] });
  const handleChange = (id, idx, value) => {
    setPredictions(prev => ({
      ...prev,
      [id]: prev[id].map((v, i) => (i === idx ? value : v)),
    }));
  };
  return (
    <div className="min-h-screen  bg-black text-white flex flex-col items-center py-8">
      
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Fixtures & Predictions</h1>
      <div className="flex gap-4 mb-6">
        <select className="bg-[#23FF00] text-black px-4 py-2 rounded">
          <option>Gameweek</option>
        </select>
        <select className="bg-[#23FF00] text-black px-4 py-2 rounded">
          <option>Gameweek 1</option>
        </select>
      </div>
      <div className="bg-[#E7FFE7] rounded-xl p-6 w-80 md:w-126 max-w-lg mb-8 text-black">
        <div className=" text-sm mb-4 text-center">03:12:09 left to predict</div>
        {/* Dummy fixtures */}
        {[
          { id: 1, home: "NEW", away: "BHA", date: "Fri, 20 June 10:44" },
          { id: 2, home: "MCI", away: "LIV", date: "Fri, 20 June 10:44" },
        ].map(f => (
          <div key={f.id} className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span>{f.home}</span>
              <span className="text-black">{f.date}</span>
              <span>{f.away}</span>
            </div>
            <div className="flex justify-center items-center gap-4">
              <input
                type="number"
                min={0}
                className="w-12 text-center bg-white text-black rounded p-2"
                value={predictions[f.id][0]}
                onChange={e => handleChange(f.id, 0, e.target.value)}
              />
              <span className="text-2xl">-</span>
              <input
                type="number"
                min={0}
                className="w-12 text-center bg-white text-black rounded p-2"
                value={predictions[f.id][1]}
                onChange={e => handleChange(f.id, 1, e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
      <button className="w-80 md:w-126 max-w-lg bg-[#23FF00] text-black font-bold py-3 rounded-lg shadow hover:from-emerald-300 hover:to-emerald-400 transition">
        Save Predictions
      </button>
    </div>
  );
}