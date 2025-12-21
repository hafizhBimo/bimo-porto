"use client";

import Image from "next/image";

export default function FolderShortcut({ title, windowKey, onOpen, icon }) {
  return (
    <button
      onClick={() => onOpen(windowKey)}
      className="flex flex-col items-center gap-1 w-20 select-none hover:bg-white/10 p-2 rounded"
    >
      <Image
        src={icon || "/folder-95.png"}
        alt={title}
        width={48}
        height={48}
        draggable={false}
      />
      <span className="text-center leading-tight text-white text-lg">{title}</span>
    </button>
  );
}
