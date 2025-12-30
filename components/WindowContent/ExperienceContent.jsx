import LogItem from "../GeneralContent.jsx/LogViewer.jsx";

export default function ExperienceContent() {
  return (
    <>
      <LogItem date="2024 — Present" title="PT PHINCON — Fullstack Web Developer">
        <li>Started as Backend Developer Intern, continued as Full-stack Developer</li>
        <li>Built and maintained omnichannel customer service systems</li>
        <li>Integrated multiple external platform APIs (Meta, YouTube, etc.)</li>
        <li>Standardized different API responses into unified data structures</li>
        <li>Processed real-time interactions using Socket.io</li>
        <li>Implemented custom routing logic for agent assignment</li>
        <li>Worked on production systems with high reliability requirements</li>
      </LogItem>

      <LogItem
        date="2018 — 2023"
        title="PT Saptaindra Sejati — Group Leader Logistic"
      >
        <li>Led and supervised warehouse operation teams</li>
        <li>Optimized supply chain workflows and material distribution</li>
        <li>Coordinated with vendors to ensure timely deliveries</li>
      </LogItem>
    </>
  );
}
