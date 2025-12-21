export default function SkillGroup({ title, items }) {
  return (
    <div>
      <div className="font-bold border-b border-gray-400 mb-1">
        {title}
      </div>
      <ul className="text-sm space-y-1">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
