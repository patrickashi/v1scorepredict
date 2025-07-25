import { useState } from "react";

export default function PrivateLeague() {
  // TODO: Call API here to fetch league details, leaderboard, results, members
  const [tab, setTab] = useState("Leaderboard");
  return (
    <div className="min-h-screen bg-[#0a0920] text-white px-4 py-8">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">Private League</h1>
      <div className="flex gap-8 mb-6 border-b border-[#23223a]">
        {["Leaderboard", "Match Results", "Members"].map(t => (
          <button
            key={t}
            className={`pb-2 px-4 font-semibold ${tab === t ? "border-b-2 border-yellow-400 text-yellow-400" : "text-gray-300"}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-4 mb-6">
        <span>Invite Code <span className="text-yellow-400">ABCD123</span></span>
        <button className="bg-[#181730] px-4 py-2 rounded text-white border border-[#23223a]">Leave League</button>
      </div>
      {tab === "Leaderboard" && (
        <div className="bg-[#181730] rounded-xl p-6 w-full max-w-md mb-8">
          <ol className="space-y-2">
            <li className="flex justify-between items-center">
              <span className="flex items-center gap-2"><span className="text-yellow-400">1</span> John Doe (You)</span>
              <span className="font-bold">75</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center gap-2"><span className="text-gray-400">2</span> Jane Smith</span>
              <span>62</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center gap-2"><span className="text-orange-400">3</span> Alex Garcia</span>
              <span>58</span>
            </li>
          </ol>
        </div>
      )}
      {tab === "Match Results" && (
        <div className="bg-[#181730] rounded-xl p-6 w-full max-w-md mb-8">
          <div className="mb-4">Gameweek 5</div>
          <div className="mb-2">Your Prediction: NEW 1 - 0</div>
          <div className="mb-2">Actual Result: BHA 1 - 0</div>
          <div className="mb-2">Your Result: MCI 2 - 1 <span className="bg-yellow-400 text-black px-2 py-1 rounded ml-2">5 Pt</span></div>
          <div className="mb-2">MUN 3 - 1</div>
        </div>
      )}
      {tab === "Members" && (
        <div className="bg-[#181730] rounded-xl p-6 w-full max-w-md mb-8">
          <div>John Doe (Owner)</div>
          <div>Jane Smith</div>
          <div>Alex Garcia</div>
        </div>
      )}
    </div>
  );
}