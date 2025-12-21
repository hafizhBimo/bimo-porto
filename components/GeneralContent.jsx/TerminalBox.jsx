export default function TerminalBox({ children }) {
  return (
    <div className="bg-black text-green-400 font-mono text-xs p-3 border border-gray-500">
      {children}
    </div>
  );
}