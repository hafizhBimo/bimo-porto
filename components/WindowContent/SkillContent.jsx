export default function SkillsContent() {
  return (
    <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
      <div>
        <h3 className="font-bold">Languages</h3>
        <ul className="mt-1">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>dotNet</li>
          <li>PHP</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold">Frameworks</h3>
        <ul className="mt-1">
          <li>React</li>
          <li>Next.js</li>
          <li>NestJS</li>
          <li>Express.js</li>
          <li>Laravel</li>
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
          <li>RabbitMq / BullMq</li>
        </ul>
      </div>
    </div>
  );
}
