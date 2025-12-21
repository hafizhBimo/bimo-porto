export default function LogItem({ date, title, children }) {
  return (
    <div className="border-b border-dashed border-gray-400 pb-2 mb-2 text-gray-800">
      <div className="font-mono text-gray-600">
        [{date}]
      </div>
      <div className="font-bold text-gray-800">{title}</div>
      <ul className="list-disc list-inside">
        {children}
      </ul>
    </div>
  );
}
