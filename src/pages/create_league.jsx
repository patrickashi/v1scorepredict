import { useState } from "react";

export default function CreateLeague() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    maxMembers: "",
    privacy: "Public",
    generateCode: true,
  });
  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Call API here to create league
    alert("League created: " + JSON.stringify(form));
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0920]">
      <h1 className="text-4xl font-bold text-emerald-400 mb-8">Create League</h1>
      <form onSubmit={handleSubmit} className="bg-[#181730] rounded-xl p-8 w-full max-w-md">
        <label className="block text-gray-300 mb-2">League Name</label>
        <input
          className="w-full p-3 rounded bg-[#0a0920] text-white mb-4 border border-[#23223a] focus:outline-none"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter league name"
          required
        />
        <label className="block text-gray-300 mb-2">League Description <span className="text-gray-500">(optional)</span></label>
        <input
          className="w-full p-3 rounded bg-[#0a0920] text-white mb-4 border border-[#23223a] focus:outline-none"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Enter league description"
        />
        <label className="block text-gray-300 mb-2">Max Members <span className="text-gray-500">(optional)</span></label>
        <input
          className="w-full p-3 rounded bg-[#0a0920] text-white mb-4 border border-[#23223a] focus:outline-none"
          name="maxMembers"
          value={form.maxMembers}
          onChange={handleChange}
          placeholder="Enter maximum number"
          type="number"
        />
        <div className="flex items-center gap-4 mb-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="privacy"
              value="Public"
              checked={form.privacy === "Public"}
              onChange={handleChange}
              className="accent-emerald-400"
            />
            <span className="text-emerald-400">Public</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="privacy"
              value="Private"
              checked={form.privacy === "Private"}
              onChange={handleChange}
              className="accent-emerald-400"
            />
            <span className="text-gray-300">Private</span>
          </label>
        </div>
        <label className="block text-gray-300 mb-2">Generate Invite Code</label>
        <input
          className="w-full p-3 rounded bg-[#0a0920] text-white mb-4 border border-[#23223a] focus:outline-none"
          name="inviteCode"
          placeholder="Enter maximum number"
        />
        <label className="flex items-center gap-2 mb-6">
          <input
            type="checkbox"
            name="generateCode"
            checked={form.generateCode}
            onChange={handleChange}
            className="accent-emerald-400"
          />
          <span className="text-emerald-400">Generate Invite Code</span>
        </label>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-400 to-emerald-300 text-black font-bold py-3 rounded-lg shadow hover:from-emerald-300 hover:to-emerald-400 transition"
        >
          Create League
        </button>
      </form>
    </div>
  );
}