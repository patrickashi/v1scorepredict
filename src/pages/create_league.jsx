// src/pages/CreateLeague.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrophy } from "react-icons/fa";

// --- Reusable Form Components for a Cleaner Layout ---

// A styled input field component
const FormInput = ({ label, subLabel, name, value, onChange, placeholder, type = "text", required = false }) => (
  <div>
    <label htmlFor={name} className="block text-brand-light font-semibold mb-2 text-sm">
      {label}
      {subLabel && <span className="text-brand-gray font-normal ml-1">{subLabel}</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full p-3 bg-black/30 border-2 border-transparent rounded-lg text-white placeholder-brand-gray focus:outline-none focus:border-white/50 transition-colors"
    />
  </div>
);

// A custom-styled radio button component
const RadioInput = ({ name, value, label, checked, onChange }) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="hidden peer" // Hide the default radio button
    />
    {/* Custom radio circle */}
    <div className="w-5 h-5 rounded-full border-2 border-brand-gray flex items-center justify-center peer-checked:border-lime-400">
      {/* Inner dot appears when checked */}
      <div className={`w-2.5 h-2.5 rounded-full transition-all ${checked ? 'bg-lime-400' : 'bg-transparent'}`}></div>
    </div>
    <span className={`font-semibold transition-colors ${checked ? 'text-white' : 'text-brand-gray'}`}>
      {label}
    </span>
  </label>
);


// --- The Main CreateLeague Page Component ---
export default function CreateLeague() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    maxMembers: "",
    privacy: "Public",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Call API here to create league with the form data
    console.log("Creating league with data:", form);
    setTimeout(() => {
      alert("League created: " + JSON.stringify(form, null, 2));
      setLoading(false);
    }, 1500);
  };

  return (
    // This is a pure content component, fitting inside your main Layout.
    <div className="flex flex-col items-center justify-start w-full mb-10">
       
      
      {/* Main Form Card */}
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-green-500/80 mt-10 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm border border-white/10"
      >
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
              <FaTrophy className="text-white text-3xl"/>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white">Create a League</h1>
          <p className="text-gray-200 mt-2">Set up a new league and invite your friends.</p>
        </div>
        <div className="space-y-6">
          <FormInput
            label="League Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g., The Champions"
            required
          />
          <FormInput
            label="League Description"
            subLabel="(optional)"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="e.g., A league for the best predictors"
          />
          
          {/* Privacy Radio Buttons */}
          <div>
            <div className="flex items-center gap-6">
              <RadioInput 
                name="privacy"
                value="Public"
                label="Public"
                checked={form.privacy === "Public"}
                onChange={handleChange}
              />
              <RadioInput 
                name="privacy"
                value="Private"
                label="Private"
                checked={form.privacy === "Private"}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Max Members field - conditionally rendered */}
          {form.privacy === 'Private' && (
            <FormInput
              label="Max Members"
              subLabel="(Only for Private leagues)"
              name="maxMembers"
              type="number"
              value={form.maxMembers}
              onChange={handleChange}
              placeholder="e.g., 20"
            />
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500/80 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-green-600 cursor-pointer hover:scale-105 duration-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating..." : "Create League"}
          </button>
        </div>
      </form>

      {/* "Back" Link */}
      <div className="mt-6">
        <Link to="/my_leagues" className="text-brand-gray hover:text-white transition-colors">
          &larr; Back to My Leagues
        </Link>
      </div>
    </div>
  );
}