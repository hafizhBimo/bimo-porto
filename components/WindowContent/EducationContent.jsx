export default function EducationContent() {
  return (
    <div className="space-y-6 text-gray-800 font-mono">

      {/* Formal Education */}
      <div>
        <h3 className="font-bold border-b border-gray-400 mb-2">
          Formal Education
        </h3>

        <div className="space-y-3 text-sm">
          <div>
            <p className="font-semibold">Bachelor of Information Systems - BINUS Online</p>
            <p>2021 – 2024</p>
          </div>

          <div>
            <p className="font-semibold">Diploma (D3) in Civil Engineering — PNJ</p>
            <p>2015 – 2018</p>
          </div>
        </div>
      </div>

      {/* Bootcamp / Training */}
      <div>
        <h3 className="font-bold border-b border-gray-400 mb-2">
          Professional Training
        </h3>

        <div className="text-sm">
          <p className="font-semibold">
            Fullstack Developer Bootcamp — Purwadhika
          </p>
          <p>2023</p>
        </div>
      </div>

    </div>
  );
}
