"use client";

import { WINDOWS_CONFIG } from "@/config/windowsConfig";
import { retroAudio } from "@/utils/audio";

export default function StartMenu({ onOpenWindow }) {
  const windowList = Object.values(WINDOWS_CONFIG);

  return (
    <div
      className="absolute bottom-10 left-2 flex
                 bg-[#c0c0c0] border-2
                 border-t-white border-l-white
                 border-b-black border-r-black
                 shadow-xl z-50 select-none"
    >
      {/* Windows 98 Vertical Banner */}
      <div className="w-7 bg-gradient-to-t from-[#000080] via-[#1084d0] to-[#000080] flex items-end justify-center pb-3">
        <span
          className="text-white font-bold text-sm tracking-wider uppercase drop-shadow"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Windows<strong className="text-gray-200 ml-1">98</strong>
        </span>
      </div>

      {/* Program Menu Items */}
      <div className="w-52 py-1">
        <div className="border-b border-gray-400 pb-1">
          {windowList.map((item) => (
            <MenuItem
              key={item.id}
              label={item.title}
              onClick={() => {
                retroAudio.playClick();
                onOpenWindow(item.id);
              }}
            />
          ))}
        </div>

        {/* System Settings */}
        <div className="pt-1">
          <MenuItem label="⚙️ System Status" disabled />
        </div>
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
        px-3 py-1.5 text-xs flex items-center gap-2
        ${
          disabled
            ? "text-gray-500 bg-[#c0c0c0] cursor-not-allowed"
            : "hover:bg-[#000080] hover:text-white cursor-pointer text-black"
        }
      `}
    >
      {label}
    </div>
  );
}
