import LogItem from "../GeneralContent.jsx/LogViewer.jsx";

export default function ExperienceContent() {
  return (
    <>
      <LogItem date="2024 — Present" title="PT PHINCON — Fullstack Web Developer">
        <li>
          Worked on a CRM-focused web application designed to support
          customer service and telemarketing operations.
        </li>
        <li>
          Built and maintained omnichannel communication features,
          enabling agents to handle interactions from multiple platforms
          in a single system.
        </li>
        <li>
          Developed custom channel integrations for Genesys Cloud
          to support real-time customer interactions.
        </li>
        <li>
          Implemented backend services and real-time processing
          to ensure reliable message handling and agent assignment.
        </li>
        <li>
          Contributed to production systems with high availability
          and operational reliability requirements.
        </li>
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
