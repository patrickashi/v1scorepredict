export default function MyLeagues() {
  // TODO: Call API here to fetch user's leagues
  return (
    <div className="min-h-screen bg-[#0a0920] text-white px-4 py-8">
     
      <h1 className="text-4xl font-bold text-center mb-8">My Leagues</h1>
      <div className="flex justify-center gap-4 mb-8">
        <a href="/create_league">
            <button className="bg-emerald-400 text-black font-semibold px-6 py-2 rounded-lg shadow hover:bg-emerald-300 transition cursor-pointer">+ Create League</button>
        </a>
        <a href="/join_league">
            <button className="bg-[#181730] text-white font-semibold px-6 py-2 rounded-lg border border-[#333] hover:bg-[#23223a] transition cursor-pointer">Join League</button>
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Global League */}
        <div className="bg-[#181730] rounded-xl p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Global League</h2>
          <div className="text-gray-400 mb-4">🌐 5 members</div>
          <ol className="space-y-2">
            <li className="flex justify-between items-center">
              <span className="flex items-center gap-2"><span className="text-emerald-400">1</span> John Doe (You)</span>
              <span className="font-bold">85 pts</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center gap-2"><span className="text-gray-400">2</span> Jane Smith</span>
              <span>82 pts</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center gap-2"><span className="text-orange-400">3</span> Mike Johnson</span>
              <span>79 pts</span>
            </li>
          </ol>
          <div className="text-gray-500 mt-2">+2 more members</div>
        </div>
        {/* Friends League */}
        <div className="bg-[#181730] rounded-xl p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Friends League</h2>
            <span className="bg-[#23223a] text-gray-300 px-2 py-1 rounded">ABC123</span>
          </div>
          <ol className="space-y-2">
            <li className="flex justify-between items-center">
              <span className="flex items-center gap-2"><span className="text-yellow-400">1</span> John Doe (You)</span>
              <span className="font-bold">45 pt</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center gap-2"><span className="text-gray-400">2</span> Alex Garcia</span>
              <span>42 pt</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center gap-2"><span className="text-orange-400">3</span> Emma Davis</span>
              <span>38 pt</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}