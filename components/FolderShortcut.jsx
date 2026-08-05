"use client";

import Image from "next/image";
import { retroAudio } from "@/utils/audio";

export default function FolderShortcut({
  title,
  windowKey,
  onOpen,
  icon,
  isSelected = false,
  onSelect,
}) {
  const handleClick = (e) => {
    e.stopPropagation();
    retroAudio.playClick();
    if (onSelect) onSelect(windowKey);
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    retroAudio.playClick();
    onOpen(windowKey);
  };

  return (
    <div
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      className={`flex flex-col items-center gap-1 w-20 select-none p-1 rounded cursor-pointer ${
        isSelected ? "win-dotted-outline" : ""
      }`}
    >
      <Image
        src={icon || "/folder-95.png"}
        alt={title}
        width={44}
        height={44}
        draggable={false}
        className="pointer-events-none"
      />
      <span
        className={`text-center leading-tight text-xs px-1 py-0.5 ${
          isSelected
            ? "bg-[#000080] text-white"
            : "text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
        }`}
      >
        {title}
      </span>
    </div>
  );
}
