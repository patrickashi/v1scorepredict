// src/pages/Register.jsx
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaFutbol } from "react-icons/fa";
import Layout from "../components/Layout";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    team: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Call register API here
    if (!form.name || !form.email || !form.password) {
      setError("Please fill all required fields.");
      return;
    }
    setError("");
    alert("Register: " + JSON.stringify(form));
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full min-h-[80vh]">
        <form
          onSubmit={handleSubmit}
          className="bg-[#181730] p-8 rounded-xl shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-emerald-300">
            Register
          </h2>
          <div className="mb-4 flex items-center border-b border-[#23213a]">
            <FaUser className="text-emerald-300 mr-2" />
            <input
              className="w-full p-2 bg-transparent outline-none text-white"
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 flex items-center border-b border-[#23213a]">
            <FaEnvelope className="text-emerald-300 mr-2" />
            <input
              className="w-full p-2 bg-transparent outline-none text-white"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 flex items-center border-b border-[#23213a]">
            <FaLock className="text-emerald-300 mr-2" />
            <input
              className="w-full p-2 bg-transparent outline-none text-white"
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6 flex items-center border-b border-[#23213a]">
            <FaFutbol className="text-emerald-300 mr-2" />
            <input
              className="w-full p-2 bg-transparent outline-none text-white"
              type="text"
              name="team"
              placeholder="Favourite Team (optional)"
              value={form.team}
              onChange={handleChange}
            />
          </div>
          {error && (
            <div className="text-red-400 text-sm mb-2 text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-300 to-sky-500 text-white font-semibold py-2 rounded-lg shadow hover:from-sky-500 hover:to-emerald-300 transition-all duration-200"
          >
            Register
          </button>
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/" className="text-sky-400 underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </Layout>
  );
}