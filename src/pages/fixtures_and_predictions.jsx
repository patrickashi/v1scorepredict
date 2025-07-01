// src/pages/fixtures_and_predictions.jsx
import { useState } from "react"

// 1) Import your club logos
import newcastle from "../assets/newcastle.jpeg"
import brighton from "../assets/brighton.jpeg"
import mancity from "../assets/mancity.jpeg"
import liverpool from "../assets/liverpool.jpeg"
// …and so on for all teams

export default function FixturesAndPredictions() {
  // dummy fixtures + logos
  const FIXTURES = [
    {
      id: 1,
      date: "Fri, 20 June 10:44",
      home: { code: "NEW", name: "Newcastle", logo: newcastle },
      away: { code: "BHA", name: "Brighton",  logo: brighton }
    },
    {
      id: 2,
      date: "Fri, 20 June 10:44",
      home: { code: "MCI", name: "Man City",  logo: mancity },
      away: { code: "LIV", name: "Liverpool", logo: liverpool }
    }
  ]

  // local prediction state
  const [predictions, setPredictions] = useState(
    FIXTURES.reduce((acc, f) => {
      acc[f.id] = [0, 0]
      return acc
    }, {})
  )

  const handleChange = (id, idx, value) => {
    setPredictions(prev => ({
      ...prev,
      [id]: prev[id].map((v, i) => (i === idx ? value : v))
    }))
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-8">

      <h1 className="text-2xl md:text-3xl font-bold mt-14 md:mt-0 mb-4">
        Fixtures & Predictions
      </h1>

      {/* selectors */}
      <div className="flex gap-4 mb-6">
        <select className="bg-[#23FF00] text-black px-4 py-2 rounded">
          <option>Gameweek</option>
        </select>
        <select className="bg-[#23FF00] text-black px-4 py-2 rounded">
          <option>Gameweek 1</option>
        </select>
      </div>

      {/* countdown + fixtures card */}
      <div className="bg-[#E7FFE7] rounded-xl p-4 w-80 md:w-[32rem] max-w-lg mb-8 text-black">
        <div className="text-center text-xs md:text-sm mb-4">
          03:12:09 left to predict
        </div>

        {FIXTURES.map(f => (
          <div key={f.id} className="mb-0">
            {/* date row */}
            <div className="flex justify-center items-center mb-2">
              {/* <span className="font-medium">{f.home.code}</span> */}
              <span className="text-gray-700">{f.date}</span>
              {/* <span className="font-medium">{f.away.code}</span> */}
            </div>

            {/* match + inputs */}
            <div className=" rounded-lg p-4 flex flex-col md:items-center md:justify-between gap-4">
              {/* teams */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs md:text-sm">{f.home.name}</span>
                <img
                  src={f.home.logo}
                  alt={f.home.name}
                  className="h-6 w-6 object-contain"
                />
                {/* ----------------------------------------- */}
                <span className="mx-2">vs</span>
                {/* ------------------------------------------ */}
                <img
                  src={f.away.logo}
                  alt={f.away.name}
                  className="h-6 w-6 object-contain"
                />
                <span className="text-xs md:text-sm">{f.away.name}</span>
              </div>

              {/* prediction inputs */}
              <div className="flex items-center justify-center gap-3">
                <input
                  type="number"
                  min={0}
                  className="w-12 text-center bg-white text-black rounded p-2"
                  value={predictions[f.id][0]}
                  onChange={e =>
                    handleChange(f.id, 0, Number(e.target.value))
                  }
                />
                <span className=" ">–</span>
                <input
                  type="number"
                  min={0}
                  className="w-12 text-center bg-white text-black rounded p-2 "
                  value={predictions[f.id][1]}
                  onChange={e =>
                    handleChange(f.id, 1, Number(e.target.value))
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* save button */}
      <button className="w-80 md:w-[32rem] max-w-lg bg-[#23FF00] text-black font-bold py-3 rounded-lg shadow transition hover:bg-[#39FF14]">
        Save Predictions
      </button>
    </div>
  )
}