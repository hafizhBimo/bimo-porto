"use client";

import React, { useState, useEffect } from "react";
import Window from "./Window";
import Taskbar from "./Taskbar";
import FolderShortcut from "./FolderShortcut";
import { WINDOWS_CONFIG } from "@/config/windowsConfig";
import { useWindowManager } from "@/hooks/useWindowManager";
import { retroAudio } from "@/utils/audio";

export default function Desktop() {
  const {
    openWindows,
    minimizedWindows,
    maximizedWindows,
    activeWindow,
    zIndexes,
    openWindow,
    closeWindow,
    focusWindow,
    minimizeWindow,
    toggleMaximizeWindow,
    toggleFromTaskbar,
  } = useWindowManager(["notepad"]);

  const [selectedShortcut, setSelectedShortcut] = useState(null);

  // Play startup chime on first interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      retroAudio.playStartupChime();
      window.removeEventListener("click", handleFirstInteraction);
    };
    window.addEventListener("click", handleFirstInteraction);
    return () => window.removeEventListener("click", handleFirstInteraction);
  }, []);

  const configList = Object.values(WINDOWS_CONFIG);

  const handleDesktopClick = (e) => {
    // Deselect desktop icons if clicking background
    if (e.target === e.currentTarget) {
      setSelectedShortcut(null);
    }
  };

  return (
    <div
      onClick={handleDesktopClick}
      className="min-h-screen bg-[#008080] relative overflow-hidden select-none pb-12"
    >
      {/* Desktop Shortcuts */}
      <div className="p-4 space-y-4 text-xs flex flex-col items-start">
        {configList
          .filter((item) => item.showShortcut)
          .map((item) => (
            <FolderShortcut
              key={item.id}
              title={item.title}
              windowKey={item.id}
              icon={item.icon}
              onOpen={openWindow}
              isSelected={selectedShortcut === item.id}
              onSelect={(key) => setSelectedShortcut(key)}
            />
          ))}

        <Taskbar
          openWindows={openWindows}
          activeWindow={activeWindow}
          minimizedWindows={minimizedWindows}
          onToggleWindow={toggleFromTaskbar}
          onOpenWindow={openWindow}
        />
      </div>

      {/* Open Windows */}
      {openWindows.map((key, index) => {
        const config = WINDOWS_CONFIG[key];
        if (!config) return null;

        const ContentComponent = config.component;
        const isActive = activeWindow === key;
        const isMinimized = minimizedWindows.includes(key);
        const isMaximized = maximizedWindows.includes(key);

        return (
          <Window
            key={key}
            id={key}
            title={config.title}
            widthClass={config.initialWindowWidth || "w-96"}
            isActive={isActive}
            isMinimized={isMinimized}
            isMaximized={isMaximized}
            onClose={closeWindow}
            onFocus={focusWindow}
            onMinimize={minimizeWindow}
            onToggleMaximize={toggleMaximizeWindow}
            zIndex={zIndexes[key] || 1}
            initialPosition={{
              x: 140 + index * 25,
              y: 60 + index * 25,
            }}
          >
            <ContentComponent />
          </Window>
        );
      })}
    </div>
  );
}
