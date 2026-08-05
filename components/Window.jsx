"use client";

import React from "react";
import { useDraggable } from "@/hooks/useDraggable";
import { retroAudio } from "@/utils/audio";

export default function Window({
  id,
  title,
  content,
  children,
  menuBar,
  onClose,
  onFocus,
  onMinimize,
  onToggleMaximize,
  isActive = false,
  isMinimized = false,
  isMaximized = false,
  zIndex = 1,
  initialPosition = { x: 120, y: 120 },
  widthClass = "w-96",
}) {
  const { position, handleMouseDown, handleMouseMove, handleMouseUp } =
    useDraggable(initialPosition, onFocus, id);

  const windowBody = content || children;

  if (isMinimized) return null;

  const maximizedStyle = isMaximized
    ? { left: 0, top: 0, width: "100%", height: "calc(100vh - 40px)", zIndex }
    : { left: position.x, top: position.y, zIndex };

  const containerClass = isMaximized
    ? "fixed bg-gray-200 border-4 border-t-white border-l-white border-b-gray-700 border-r-gray-700 shadow-lg select-none"
    : `absolute ${widthClass} bg-gray-200 border-4 border-t-white border-l-white border-b-gray-700 border-r-gray-700 shadow-lg select-none`;

  return (
    <div
      className={containerClass}
      style={maximizedStyle}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseDown={() => {
        if (onFocus) onFocus(id);
      }}
    >
      {/* Title Bar */}
      <div
        className={`flex justify-between items-center px-2 py-1 cursor-move select-none ${
          isActive
            ? "bg-[#000080] text-white font-bold"
            : "bg-[#808080] text-[#c0c0c0] font-normal"
        }`}
        onMouseDown={(e) => {
          if (!isMaximized) handleMouseDown(e);
        }}
      >
        <span className="text-sm tracking-wide truncate pr-2">{title}</span>

        {/* Control Buttons (Minimize, Maximize, Close) */}
        <div className="flex items-center gap-1">
          {/* Minimize */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              retroAudio.playClick();
              if (onMinimize) onMinimize(id);
            }}
            className="w-4 h-4 bg-[#c0c0c0] border-t-white border-l-white border-b-black border-r-black border text-black font-bold flex items-center justify-center text-xs leading-none active:border-t-black active:border-l-black active:border-b-white active:border-r-white"
            title="Minimize"
          >
            _
          </button>

          {/* Maximize / Restore */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              retroAudio.playClick();
              if (onToggleMaximize) onToggleMaximize(id);
            }}
            className="w-4 h-4 bg-[#c0c0c0] border-t-white border-l-white border-b-black border-r-black border text-black font-bold flex items-center justify-center text-[10px] leading-none active:border-t-black active:border-l-black active:border-b-white active:border-r-white"
            title={isMaximized ? "Restore" : "Maximize"}
          >
            {isMaximized ? "🗗" : "🗖"}
          </button>

          {/* Close */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              retroAudio.playClick();
              if (onClose) onClose(id);
            }}
            className="w-4 h-4 bg-[#c0c0c0] border-t-white border-l-white border-b-black border-r-black border text-black font-bold flex items-center justify-center text-xs leading-none active:border-t-black active:border-l-black active:border-b-white active:border-r-white ml-0.5"
            title="Close"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Optional Menu Bar (e.g. for Notepad) */}
      {menuBar}

      {/* Window Content Body */}
      <div className="p-3 bg-white text-sm text-black">{windowBody}</div>
    </div>
  );
}
