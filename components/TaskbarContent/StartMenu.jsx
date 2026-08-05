"use client";

import { WINDOWS_CONFIG } from "@/config/windowsConfig";

export default function StartMenu({ onOpenWindow }) {
  const windowList = Object.values(WINDOWS_CONFIG);

  return (
    <div
      className="absolute bottom-10 left-2 w-56
                 bg-gray-200 border-2
                 border-t-white border-l-white
                 border-b-gray-700 border-r-gray-700
                 shadow-lg text-base font-mono z-50"
    >
      {/* Programs */}
      <div className="border-b border-gray-400">
        {windowList.map((item) => (
          <MenuItem
            key={item.id}
            label={item.title}
            onClick={() => onOpenWindow(item.id)}
          />
        ))}
      </div>

      {/* Settings */}
      <div className="border-t border-white">
        <MenuItem label="⚙️ System Status" disabled />
      </div>
    </div>
  );
}

function MenuItem({ label, onClick, disabled = false }) {
  return (
    <div
      onClick={() => {
        if (!disabled && onClick) onClick();
      }}
      className={`
        px-3 py-1 font-mono flex items-center gap-2
        ${
          disabled
            ? "text-gray-500 bg-gray-200 cursor-not-allowed"
            : "hover:bg-blue-800 hover:text-white cursor-pointer"
        }
      `}
    >
      {label}
    </div>
  );
}
