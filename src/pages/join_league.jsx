import { useState } from "react";

export default function JoinLeague() {
  const [code, setCode] = useState("");
  const handleJoin = (e) => {
    e.preventDefault();
    // TODO: Call API here to join league with code
    alert("Joining league with code: " + code);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0920]">
      <h1 className="text-3xl font-bold text-emerald-400 mb-8">JOIN LEAGUE</h1>
      <form onSubmit={handleJoin} className="bg-[#181730] rounded-xl p-8 w-full max-w-md">
        <label className="block text-gray-300 mb-2">Invite Code</label>
        <input
          className="w-full p-3 rounded bg-[#0a0920] text-white mb-6 border border-[#23223a] focus:outline-none"
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="Enter code"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-400 to-emerald-300 text-black font-bold py-3 rounded-lg shadow hover:from-emerald-300 hover:to-emerald-400 transition cursor-pointer"
        >
          Join League
        </button>
      </form>
    </div>
  );
}