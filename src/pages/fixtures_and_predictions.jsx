// src/pages/FixturesAndPredictions.jsx
import { useState, useEffect } from 'react';
import { FaRegClock, FaCheckCircle, FaChevronLeft, FaChevronRight, FaSave } from "react-icons/fa";

// --- Import your club logos ---
import newcastle from "../assets/newcastle.jpeg";
import brighton from "../assets/brighton.jpeg";
import mancity from "../assets/mancity.jpeg";
import liverpool from "../assets/liverpool.jpeg";

// --- Reusable Content-Only Components ---

// A single fixture/prediction card
const FixtureCard = ({ fixture, prediction, onPredictionChange }) => (
  <div className="bg-black/20 p-4 rounded-xl">
    {/* Match Info: Teams & Logos */}
    <div className="flex items-center justify-center gap-4 mb-4">
      <div className="flex-1 text-right font-bold text-white text-sm sm:text-base">{fixture.home.code}</div>
      <img src={fixture.home.logo} alt={fixture.home.name} className="w-8 h-8 object-contain" />
      <span className="text-brand-gray text-xs">VS</span>
      <img src={fixture.away.logo} alt={fixture.away.name} className="w-8 h-8 object-contain" />
      <div className="flex-1 font-bold text-white text-sm sm:text-base">{fixture.away.code}</div>
    </div>
    
    {/* Prediction Inputs */}
    <div className="flex items-center justify-center gap-3">
      <input
        type="number"
        min={0}
        max={99}
        className="w-16 h-12 text-center bg-black/30 text-white text-2xl font-bold rounded-lg border-2 border-transparent focus:outline-none focus:border-white/50 transition-colors"
        value={prediction[0]}
        onChange={(e) => onPredictionChange(fixture.id, 0, Number(e.target.value))}
      />
      <span className="text-2xl font-bold text-brand-gray">–</span>
      <input
        type="number"
        min={0}
        max={99}
        className="w-16 h-12 text-center bg-black/30 text-white text-2xl font-bold rounded-lg border-2 border-transparent focus:outline-none focus:border-white/50 transition-colors"
        value={prediction[1]}
        onChange={(e) => onPredictionChange(fixture.id, 1, Number(e.target.value))}
      />
    </div>

    {/* Match Date */}
    <div className="text-center text-xs text-brand-gray mt-3">{fixture.date}</div>
  </div>
);


// --- The Main FixturesAndPredictions Page Component ---
export default function FixturesAndPredictions() {
  const [fixtures, setFixtures] = useState([]);
  const [predictions, setPredictions] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // TODO: Replace this with an API call to fetch fixtures for the selected gameweek
    const dummyFixtures = [
      { id: 1, date: "Fri, 20 June 10:44", home: { code: "NEW", name: "Newcastle", logo: newcastle }, away: { code: "BHA", name: "Brighton", logo: brighton } },
      { id: 2, date: "Fri, 20 June 10:44", home: { code: "MCI", name: "Man City", logo: mancity }, away: { code: "LIV", name: "Liverpool", logo: liverpool } },
      // Add more dummy fixtures as needed
    ];
    setFixtures(dummyFixtures);

    // Initialize predictions state based on fetched fixtures
    const initialPredictions = dummyFixtures.reduce((acc, f) => {
      acc[f.id] = [null, null]; // Use null for empty state
      return acc;
    }, {});
    setPredictions(initialPredictions);
  }, []);

  const handlePredictionChange = (fixtureId, teamIndex, value) => {
    setPredictions(prev => ({
      ...prev,
      [fixtureId]: prev[fixtureId].map((v, i) => (i === teamIndex ? value : v))
    }));
  };

  const handleSave = () => {
    setIsSaving(true);
    setSaved(false);
    console.log("Saving predictions:", predictions);

    // TODO: Call your real API here to post the `predictions` object
    setTimeout(() => {
      setIsSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000); // Reset "Saved!" message after 3s
    }, 1500);
  };

  return (
    <div className="space-y-6 bg-green-500/80 py-10 px-4">
      {/* Header and Gameweek Selector */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Predictions</h1>
        <p className="text-brand-gray text-sm">Make your predictions for the upcoming gameweek.</p>
      </div>

      <div className="flex items-center justify-between bg-black/20 p-2 rounded-full max-w-sm mx-auto">
        <button className="p-2 text-brand-gray hover:text-white rounded-full"><FaChevronLeft /></button>
        <select className="bg-black/20 px-2 rounded-md text-white font-bold text-center appearance-none focus:outline-none cursor-pointer">
          <option className="bg-brand-dark">Gameweek 21</option>
          <option className="bg-brand-dark">Gameweek 22</option>
          <option className="bg-brand-dark">Gameweek 23</option>
        </select>
        <button className="p-2 text-brand-gray hover:text-white rounded-full"><FaChevronRight /></button>
      </div>

      {/* Main Content Card */}
      <div className="bg-gradient-to-b from-brand-green-light to-brand-green rounded-2xl p-4 sm:p-6 shadow-lg backdrop-blur-sm border border-white/10 max-w-2xl mx-auto">
        {/* Countdown Timer */}
        <div className="text-center text-sm text-brand-light font-semibold mb-4 flex items-center justify-center gap-2">
          <FaRegClock />
          <span>03:12:09 left to predict</span>
        </div>
        
        {/* Fixtures List */}
        <div className="space-y-4">
          {fixtures.map(fixture => (
            <FixtureCard 
              key={fixture.id}
              fixture={fixture}
              prediction={predictions[fixture.id] || [null, null]}
              onPredictionChange={handlePredictionChange}
            />
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="max-w-2xl mx-auto">
        <button
          onClick={handleSave}
          disabled={isSaving || saved}
          className={`w-full flex items-center justify-center gap-3 text-lg font-semibold cursor-pointer  py-4 rounded-lg shadow-lg transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed ${
            saved 
              ? 'bg-emerald-500 text-gray-900' 
              : 'bg-white text-gray-600'
          }`}
        >
          {isSaving ? "Saving..." : saved ? <><FaCheckCircle /> Saved!</> : <><FaSave /> Save Predictions</>}
        </button>
      </div>
    </div>
  );
}