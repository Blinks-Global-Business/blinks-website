export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-xl border border-border p-8 shadow-[0_10px_20px_-10px_rgba(31,31,35,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}