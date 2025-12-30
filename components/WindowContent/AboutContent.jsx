import Image from "next/image";

export default function AboutContent() {
  return (
    <div className="grid grid-cols-3 gap-4 text-sm text-black font-mono">

      {/* LEFT COLUMN */}
      <div className="space-y-4">

        {/* Profile Picture */}
        <div className="border border-gray-500 bg-gray-200 p-2">
          <div className="border border-black bg-black p-1">
            <Image
              src="/profile.jpg" // put image in /public/profile.jpg
              alt="Hafizh Bimo"
              width={160}
              height={160}
              className="bg-black"
            />
          </div>
          <p className="text-center mt-2 text-xs">
            Hafizh Bimo Wicaksono
          </p>
        </div>

        {/* Status Box */}
        <div className="border border-gray-500 bg-gray-200 p-2">
          <h4 className="font-bold mb-2 border-b border-gray-500">
            Status
          </h4>
          <div className="space-y-1 text-xs">
            <p>Role: Fullstack Developer</p>
            <p>Location: Jakarta, ID</p>
            <p>Experience: 2 yrs</p>
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN (SPAN 2) */}
      <div className="col-span-2 space-y-4">

        {/* User Info Panel */}
        <div className="border border-gray-500 bg-gray-200 p-2">
          <h4 className="font-bold mb-2 border-b border-gray-500">
            User Information
          </h4>

          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs">
            <p><strong>Name</strong></p>
            <p>Hafizh Bimo Wicaksono</p>

            <p><strong>Role</strong></p>
            <p>Fullstack Developer</p>

            <p><strong>Location</strong></p>
            <p>Jakarta, Indonesia</p>

            <p><strong>Experience</strong></p>
            <p>2 years</p>
          </div>
        </div>

        {/* Summary Panel */}
        <div className="border border-gray-500 bg-gray-200 p-2">
          <h4 className="font-bold mb-2 border-b border-gray-500">
            Summary
          </h4>

          <p className="text-xs leading-relaxed">
            Software Engineer with experience in backend development,
            system integration, and internal tooling.
            Strong focus on clean architecture, maintainability,
            and real-world problem solving.
          </p>
        </div>

        {/* Interests Panel */}
        <div className="border border-gray-500 bg-gray-200 p-2">
          <h4 className="font-bold mb-2 border-b border-gray-500">
            Focus Areas
          </h4>

          <ul className="text-xs space-y-1">
            <li>• Backend Systems</li>
            <li>• API Design</li>
            <li>• Performance Optimization</li>
            <li>• Product-focused Engineering</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
