"use client";

import { useState, useEffect } from "react";
import { WINDOWS_CONFIG } from "@/config/windowsConfig";
import StartMenu from "./TaskbarContent/StartMenu";
import { retroAudio } from "@/utils/audio";

const specialTitles = {
  system: "System Status",
};

export default function Taskbar({
  openWindows,
  activeWindow,
  minimizedWindows = [],
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
      {/* Start Menu Popup */}
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

      {/* Taskbar Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-9 bg-[#c0c0c0] border-t-2 border-white flex items-center px-1 text-black z-50 select-none">
        {/* Left side: Start Button & Open Window Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {/* Start Button */}
          <button
            onClick={() => {
              retroAudio.playClick();
              setStartOpen(!startOpen);
            }}
            className={`px-2 py-0.5 font-bold text-xs flex items-center gap-1.5 border-2 ${
              startOpen
                ? "bg-[#dfdfdf] border-t-black border-l-black border-b-white border-r-white border-dotted"
                : "bg-[#c0c0c0] border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white"
            }`}
          >
            {/* Windows 4-Color Flag Icon */}
            <div className="w-3.5 h-3.5 grid grid-cols-2 gap-0.5 pointer-events-none">
              <div className="bg-[#ff4b4b]" />
              <div className="bg-[#52c41a]" />
              <div className="bg-[#1890ff]" />
              <div className="bg-[#ffec3d]" />
            </div>
            <span>Start</span>
          </button>

          {/* Separator Line */}
          <div className="w-0.5 h-6 border-l border-gray-500 border-r border-white mx-0.5" />

          {/* Window Tabs */}
          {openWindows.map((key) => {
            const title =
              WINDOWS_CONFIG[key]?.title || specialTitles[key] || key;
            const isActive = activeWindow === key && !minimizedWindows.includes(key);

            return (
              <button
                key={key}
                onClick={() => {
                  retroAudio.playClick();
                  onToggleWindow(key);
                }}
                className={`px-2 py-0.5 border text-xs max-w-40 truncate ${
                  isActive
                    ? "bg-[#dfdfdf] border-t-black border-l-black border-b-white border-r-white font-bold"
                    : "bg-[#c0c0c0] border-t-white border-l-white border-b-black border-r-black text-gray-800"
                }`}
              >
                {title}
              </button>
            );
          })}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* System Tray (Notification Area + Clock) */}
        <div
          className="
            flex items-center gap-2 px-2 py-0.5
            border
            border-t-gray-700 border-l-gray-700
            border-b-white border-r-white
            bg-[#c0c0c0]
            text-xs
          "
        >
          {/* System Tray Icons */}
          <span title="Volume" className="cursor-pointer">🔊</span>
          <span title="Network Status" className="cursor-pointer">💻</span>

          {/* Separator */}
          <div className="w-px h-3 bg-gray-500" />

          {/* Clock */}
          <span>{time}</span>
        </div>
      </div>
    </>
  );
}
