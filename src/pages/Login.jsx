// src/pages/Login.jsx
import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Layout from "../components/Layout";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Call login API here
    if (!form.email || !form.password) {
      setError("Please fill all fields.");
      return;
    }
    setError("");
    alert("Login: " + JSON.stringify(form));
  };

  return (
    
      <div className="flex flex-col items-center justify-center w-full min-h-[80vh]">
        <form
          onSubmit={handleSubmit}
          className="bg-[#181730] p-8 rounded-xl shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-emerald-300">
            Login
          </h2>
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
          <div className="mb-6 flex items-center border-b border-[#23213a]">
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
          {error && (
            <div className="text-red-400 text-sm mb-2 text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-300 to-sky-500 text-white font-semibold py-2 rounded-lg shadow hover:from-sky-500 hover:to-emerald-300 transition-all duration-200"
          >
            Login
          </button>
          <div className="mt-4 flex justify-between text-sm">
            <a href="/register" className="text-sky-400 underline">
              Register
            </a>
            <a href="#" className="text-sky-400 underline">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
 
  );
}