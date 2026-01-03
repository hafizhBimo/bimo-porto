"use client";

import { useState, useEffect } from "react";
import { windowsData } from "./data";
import StartMenu from "./TaskbarContent/StartMenu";

const specialTitles = {
  notepad: "General - Notepad",
  system: "System Status",
};

export default function Taskbar({
  openWindows,
  activeWindow,
  onToggleWindow,
  onOpenWindow,
}) {
  const [startOpen, setStartOpen] = useState(false);
  const [time, setTime] = useState("");

  // Clock updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };

    updateTime(); // initial
    const interval = setInterval(updateTime, 60000); // update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Start Menu */}
      {startOpen && (
        <div onClick={() => setStartOpen(false)}>
          <StartMenu
            onOpenWindow={(key) => {
              onOpenWindow(key);
              setStartOpen(false);
            }}
          />
        </div>
      )}

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gray-300 border-t-2 border-white flex items-center px-2 text-gray-800 z-50">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Start Button */}
          <button
            onClick={() => setStartOpen(!startOpen)}
            className={`px-3 py-1 font-bold border-2 ${startOpen
                ? "bg-white border-black"
                : "bg-gray-200 border-t-white border-l-white border-b-gray-700 border-r-gray-700"
              }`}
          >
            Start
          </button>

          {/* Window Tabs */}
          {openWindows.map((key) => {
            const title =
              windowsData[key]?.title || specialTitles[key] || key;

            return (
              <button
                key={key}
                onClick={() => onToggleWindow(key)}
                className={`px-3 py-1 border text-base ${activeWindow === key
                    ? "bg-white border-black"
                    : "bg-gray-200 border-gray-500"
                  }`}
              >
                {title}
              </button>
            );
          })}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Clock */}
        <div
          className="
            px-3 py-1
            border
            border-t-gray-700 border-l-gray-700
            border-b-white border-r-white
            bg-gray-200
            text-base
            font-mono
          "
        >
          {time}
        </div>
      </div>
    </>
  );
}
