"use client";

import React from "react";
import { useDraggable } from "@/hooks/useDraggable";

export default function Window({
  id,
  title,
  content,
  children,
  menuBar,
  onClose,
  onFocus,
  zIndex = 1,
  initialPosition = { x: 120, y: 120 },
  widthClass = "w-96",
}) {
  const { position, handleMouseDown, handleMouseMove, handleMouseUp } =
    useDraggable(initialPosition, onFocus, id);

  const windowBody = content || children;

  return (
    <div
      className={`absolute ${widthClass} bg-gray-200 border-4 border-t-white border-l-white border-b-gray-700 border-r-gray-700 shadow-lg select-none`}
      style={{ left: position.x, top: position.y, zIndex }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseDown={() => onFocus && onFocus(id)}
    >
      {/* Title Bar */}
      <div
        className="flex justify-between items-center bg-blue-800 px-2 py-1 cursor-move text-white"
        onMouseDown={handleMouseDown}
      >
        <span className="text-lg font-mono">{title}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onClose) onClose(id);
          }}
          className="w-4 h-4 bg-gray-200 border border-black flex items-center justify-center text-black"
          title="Close"
        >
          ✕
        </button>
      </div>

      {/* Optional Menu Bar (e.g. for Notepad) */}
      {menuBar}

      {/* Window Content */}
      <div className="p-4 bg-white text-base">{windowBody}</div>
    </div>
  );
}
