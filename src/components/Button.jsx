// src/components/Button.jsx
export default function Button({ children, ...props }) {
  return (
    <button
      className="
        bg-[#23FF00] 
        text-black 
        font-semibold 
        py-2 px-6 
        rounded-lg 
        shadow-md 
        hover:from-neon 
        hover:to-neon.light
        transition-all duration-200
      "
      {...props}
    >
      {children}
    </button>
  );
}