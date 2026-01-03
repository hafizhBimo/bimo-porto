import Image from "next/image";

export default function AboutContent() {
  return (
    <div className="grid grid-cols-3 gap-4 text-base text-black font-mono">

      {/* LEFT COLUMN */}
      <div>
        {/* <div className="border border-gray-500 bg-gray-200 p-2"> */}
        <div className="border border-black bg-black p-1">
          <Image
            src="/profile-picture.png"
            alt="Hafizh Bimo"
            width={160}
            height={160}
            className="bg-black"
          />
        </div>
        {/* </div> */}
      </div>

      {/* USER INFO (RIGHT, SPAN 2) */}
      <div className="col-span-2">
        <div className="border border-gray-500 bg-gray-200 p-2">
          <h4 className="font-bold mb-2 border-b border-gray-500">
            User Information
          </h4>

          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
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
      </div>

      {/* SUMMARY — FULL WIDTH */}
      <div className="col-span-3">
        <div
          className="bg-black border border-gray-700 p-3 font-mono text-base shadow-inner"
        >
          <h4 className="mb-2  border-b">
            summary.txt
          </h4>
          <div>
            <p>
              <span className="text-green-500">bimo@portfolio</span>
              <span className="text-white"> :</span>
              <span className="text-blue-600"> ~</span>
              <span className="text-white">$ </span>
              <span className="text-white">cat whoami</span>
            </p>
            <p className="text-white">
              Fullstack Developer specializing in backend development,
              system integration, and internal enterprise tools.
            </p>
          </div>
          <div>
            <p>
              <span className="text-green-500">bimo@portfolio</span>
              <span className="text-white"> :</span>
              <span className="text-blue-600"> ~</span>
              <span className="text-white">$ </span>
              <span className="text-white">cat experience</span>
            </p>
            <p className="text-white">
              Delivering maintainable and scalable solutions
              for real-world business needs.
            </p>
          </div>
          <div>
            <p>
              <span className="text-green-500">bimo@portfolio</span>
              <span className="text-white"> :</span>
              <span className="text-blue-600"> ~</span>
              <span className="text-white">$ </span>
              <span className="text-white">cat passion</span>
            </p>
            <p className="text-white">
              Coding and technology enthusiast committed to
              continuous learning and technical growth.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
