export default function SkillsContent() {
  return (
    <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
      <div>
        <h3 className="font-bold">Languages</h3>
        <ul className="mt-1">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>Java</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold">Frameworks</h3>
        <ul className="mt-1">
          <li>React</li>
          <li>Next.js</li>
          <li>NestJS</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold">Databases</h3>
        <ul className="mt-1">
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>Redis</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold">Tools</h3>
        <ul className="mt-1">
          <li>Docker</li>
          <li>Git</li>
          <li>Linux</li>
        </ul>
      </div>
    </div>
  );
}
