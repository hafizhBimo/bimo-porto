"use client";

import React from "react";

export default function GeneralNotepadContent() {
  return (
    <div>
      {/* Menu bar */}
      <div className="flex gap-4 px-2 py-1 bg-gray-300 border-b border-gray-500 font-mono text-base text-gray-500 select-none -mx-4 -mt-4 mb-3">
        <span>
          <span className="underline">F</span>ile
        </span>
        <span>
          <span className="underline">E</span>dit
        </span>
        <span>
          <span className="underline">S</span>earch
        </span>
        <span>
          <span className="underline">H</span>elp
        </span>
      </div>

      {/* Content */}
      <div className="bg-white border border-gray-400 p-3 font-mono h-70 overflow-y-auto text-black text-base">
        <div>
          <p>
            This portfolio is deployed and hosted on my personal home server.
          </p>

          <p>
            System services, uptime, and infrastructure are managed independently
            as part of my learning and experimentation in self-hosting.
          </p>

          <pre className="m-0">----------------------------------------------</pre>

          <p>Note:</p>

          <p>This website is currently optimized for desktop viewing.</p>

          <p>
            Mobile and responsive layout support is not available at the moment,
            but may be added in future updates as the project evolves.
          </p>

          <pre className="m-0">----------------------------------------------</pre>

          <div>
            <strong>Welcome to My Portfolio</strong>
          </div>

          <pre className="m-0">----------------------------------------------</pre>

          <p>
            This website is designed as a desktop-style environment inspired by
            classic Windows systems.
          </p>

          <p>Here you can explore:</p>

          <ul>
            <li>- About Me</li>
            <li>- Professional Experience</li>
            <li>- Education Background</li>
            <li>- Technical Skills</li>
          </ul>

          <pre className="m-0">----------------------------------------------</pre>

          <p>Thank you for visiting.</p>

          <pre className="m-0">----------------------------------------------</pre>

          <pre className="m-0">
            (c) Hafizh Bimo 1997–2025
            All rights reserved.
          </pre>

          <pre className="m-0">----------------------------------------------</pre>
        </div>
      </div>
    </div>
  );
}
