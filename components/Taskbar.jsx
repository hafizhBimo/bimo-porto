"use client";

import { windowsData } from "./data";

const specialTitles = {
    notepad: "General - Notepad",
};

export default function Taskbar({
    openWindows,
    activeWindow,
    onToggleWindow,
}) {
    return (
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gray-300 border-t-2 border-white flex items-center px-2 gap-2 text-gray-800">
            {/* Start Button */}
            <div className="bg-gray-200 border-2 border-t-white border-l-white border-b-gray-700 border-r-gray-700 px-3 py-1 text-base font-bold">
                Start
            </div>

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
    );
}
