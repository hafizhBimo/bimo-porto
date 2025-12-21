export default function Panel({ title, children }) {
  return (
    <div className="border border-gray-400 bg-gray-100">
      <div className="bg-gray-300 px-2 py-1 text-xs font-bold">
        {title}
      </div>
      <div className="p-3">
        {children}
      </div>
    </div>
  );
}
