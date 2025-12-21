"use client";

import React, { useRef, useState } from "react";

export default function Window({
  id,
  title,
  content,
  onClose,
  onFocus,
  zIndex,
  initialPosition = { x: 120, y: 120 },
}) {
  const [position, setPosition] = useState(initialPosition);
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    onFocus(id);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    setPosition({
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y,
    });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="absolute w-96 bg-gray-200 border-4 border-t-white border-l-white border-b-gray-700 border-r-gray-700 shadow-lg select-none"
      style={{ left: position.x, top: position.y, zIndex }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseDown={() => onFocus(id)}
    >
      {/* Title Bar */}
      <div
        className="flex justify-between items-center bg-blue-800 px-2 py-1 cursor-move text-white"
        onMouseDown={handleMouseDown}
      >
        <span className="text-lg">{title}</span>
        <button
          onClick={() => onClose(id)}
          className="w-4 h-4 bg-red-600 border border-black"
          aria-label="Close window"
        />
      </div>

      {/* Window Content */}
      <div className="p-4 bg-white text-base">{content}</div>
    </div>
  );
}
