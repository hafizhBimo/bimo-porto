"use client";

import React, { useState, useRef } from "react";

export default function GeneralNotepad({
  id,
  onClose,
  zIndex,
  onFocus,
}) {
  const [pos, setPos] = useState({ x: 140, y: 80 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const onMouseDown = (e) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
    onFocus(id);
  };

  const onMouseMove = (e) => {
    if (!dragging.current) return;

    setPos({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const onMouseUp = () => {
    dragging.current = false;
  };

  return (
    <div
      className="
        absolute w-[520px]
        bg-gray-200 border-4
        border-t-white border-l-white
        border-b-gray-700 border-r-gray-700
        shadow-lg
      "
      style={{ left: pos.x, top: pos.y, zIndex }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-2 py-1 bg-blue-800 text-white cursor-move"
        onMouseDown={onMouseDown}
      >
        <span className="text-lg font-mono">
          General - Notepad
        </span>
        <button
          onClick={() => onClose(id)}
          className="w-4 h-4 bg-red-600 border border-black"
        />
      </div>

      {/* Menu bar */}
      <div className="flex gap-4 px-2 py-1 bg-gray-300 border-b border-gray-500 font-mono text-base">
        <span>File</span>
        <span>Edit</span>
        <span>Search</span>
        <span>Help</span>
      </div>

      {/* Content */}
      <div className="bg-white border border-gray-400 m-2 p-3 font-mono h-[280px] overflow-y-auto whitespace-pre-wrap text-black text-base">
{`----------------------------------------------
   Welcome to My Portfolio
----------------------------------------------

This website is designed as a desktop-style
environment inspired by classic Windows systems.

Here you can explore:

- About Me
- Professional Experience
- Education Background
- Technical Skills

Each section opens as a separate window,
just like a real operating system.

Feel free to explore and interact.

----------------------------------------------
Thank you for visiting.
`}
      </div>
    </div>
  );
}
