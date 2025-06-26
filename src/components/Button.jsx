// components/Button.jsx
export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-gradient-to-r from-emerald-300 to-sky-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:from-sky-500 hover:to-emerald-300 transition-all duration-200"
      {...props}
    >
      {children}
    </button>
  );
}