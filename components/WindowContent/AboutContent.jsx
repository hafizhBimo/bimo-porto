export default function AboutContent() {
  return (
    <div className="space-y-4 text-gray-800">
      <section>
        <h3 className="font-bold">User Profile</h3>
        <div className="mt-2 space-y-1">
          <p><strong>Name:</strong> Hafizh Bimo</p>
          <p><strong>Role:</strong> Software Engineer</p>
          <p><strong>Location:</strong> Jakarta, Indonesia</p>
        </div>
      </section>

      <section>
        <h3 className="font-bold">Summary</h3>
        <p className="mt-1 leading-relaxed">
          Software Engineer with experience in backend development, system
          integration, and internal tools. Strong focus on clean architecture,
          maintainability, and real-world problem solving.
        </p>
      </section>

      <section>
        <h3 className="font-bold">Interests</h3>
        <ul className="list-disc list-inside mt-1">
          <li>Backend Systems</li>
          <li>API Design</li>
          <li>Performance Optimization</li>
          <li>Product-focused Engineering</li>
        </ul>
      </section>
    </div>
  );
}
