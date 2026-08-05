"use client";

import React from "react";
import Window from "./Window";
import Taskbar from "./Taskbar";
import FolderShortcut from "./FolderShortcut";
import { WINDOWS_CONFIG } from "@/config/windowsConfig";
import { useWindowManager } from "@/hooks/useWindowManager";

export default function Desktop() {
  const {
    openWindows,
    activeWindow,
    zIndexes,
    openWindow,
    closeWindow,
    focusWindow,
    toggleFromTaskbar,
  } = useWindowManager(["notepad"]);

  const configList = Object.values(WINDOWS_CONFIG);

  return (
    <div className="min-h-screen bg-[#008080] font-mono relative overflow-hidden">
      {/* Desktop Shortcuts */}
      <div className="p-6 space-y-6 text-sm">
        {configList
          .filter((item) => item.showShortcut)
          .map((item) => (
            <FolderShortcut
              key={item.id}
              title={item.title}
              windowKey={item.id}
              icon={item.icon}
              onOpen={openWindow}
            />
          ))}

        <Taskbar
          openWindows={openWindows}
          activeWindow={activeWindow}
          onToggleWindow={toggleFromTaskbar}
          onOpenWindow={openWindow}
        />
      </div>

      {/* Open Windows */}
      {openWindows.map((key, index) => {
        const config = WINDOWS_CONFIG[key];
        if (!config) return null;

        const ContentComponent = config.component;

        return (
          <Window
            key={key}
            id={key}
            title={config.title}
            widthClass={config.initialWindowWidth || "w-96"}
            onClose={closeWindow}
            onFocus={focusWindow}
            zIndex={zIndexes[key] || 1}
            initialPosition={{
              x: 140 + index * 30,
              y: 80 + index * 30,
            }}
          >
            <ContentComponent />
          </Window>
        );
      })}
    </div>
  );
}
