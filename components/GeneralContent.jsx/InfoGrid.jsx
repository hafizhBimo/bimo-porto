export default function InfoGrid({ items }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-y-1 text-base">
      {items.map(({ label, value }) => (
        <React.Fragment key={label}>
          <span className="font-bold">{label}</span>
          <span>{value}</span>
        </React.Fragment>
      ))}
    </div>
  );
}
