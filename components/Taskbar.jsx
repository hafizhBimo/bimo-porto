"use client";

import { useEffect, useState } from "react";
import { windowsData } from "./data";

const specialTitles = {
  notepad: "General - Notepad",
};

export default function Taskbar({
  openWindows,
  activeWindow,
  onToggleWindow,
}) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime(); // initial
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gray-300 border-t-2 border-white flex items-center px-2 text-gray-800">
      {/* Start Button */}
      <div className="bg-gray-200 border-2 border-t-white border-l-white border-b-gray-700 border-r-gray-700 px-3 py-1 text-base font-bold">
        Start
      </div>

      {/* Window Tabs */}
      <div className="flex gap-2 ml-2 flex-1">
        {openWindows.map((key) => {
          const title =
            windowsData[key]?.title || specialTitles[key] || key;

          return (
            <button
              key={key}
              onClick={() => onToggleWindow(key)}
              className={`px-3 py-1 border text-base ${
                activeWindow === key
                  ? "bg-white border-black"
                  : "bg-gray-200 border-gray-500"
              }`}
            >
              {title}
            </button>
          );
        })}
      </div>

      {/* Clock */}
      <div className="px-3 py-1 bg-gray-200 border-2 border-t-gray-700 border-l-gray-700 border-b-white border-r-white text-base font-mono">
        {time}
      </div>
    </div>
  );
}
