"use client";

import React, { useState } from "react";
import Window from "./Window";
import { windowsData } from "./data";
import Taskbar from "./Taskbar";
import FolderShortcut from "./FolderShortcut";
import GeneralNotepad from "./WindowContent/GeneralNotepadContent";

export default function Desktop() {
    const [openWindows, setOpenWindows] = useState(["notepad"]);
    const [zIndexes, setZIndexes] = useState({});
    const [activeWindow, setActiveWindow] = useState("notepad");

    const openWindow = (key) => {
        setOpenWindows((prev) => {
            if (prev.includes(key)) return prev;
            return [...prev, key];
        });

        focusWindow(key);
    };

    const toggleFromTaskbar = (key) => {
        // If clicking active window → minimize (for now just unfocus)
        if (activeWindow === key) {
            setActiveWindow(null);
        } else {
            setActiveWindow(key);
        }
    };

    const closeWindow = (key) => {
        setOpenWindows((prev) => prev.filter((w) => w !== key));
    };

    const focusWindow = (key) => {
        setActiveWindow(key);

        setZIndexes((prev) => {
            const maxZ = Math.max(0, ...Object.values(prev));
            return {
                ...prev,
                [key]: maxZ + 1,
            };
        });
    };

    return (
        <div className="min-h-screen bg-[#008080] font-mono relative overflow-hidden">
            {/* Desktop Shortcuts */}
            <div className="p-6 space-y-6 text-sm">
                <FolderShortcut
                    title="About Me"
                    windowKey="about"
                    icon="/star-95.png"
                    onOpen={openWindow}
                />

                <FolderShortcut
                    title="Experience"
                    windowKey="experience"
                    onOpen={openWindow}
                />

                <FolderShortcut
                    title="Education"
                    windowKey="education"
                    icon="/books-95.png"
                    onOpen={openWindow}
                />

                <FolderShortcut
                    title="Skills"
                    windowKey="skills"
                    onOpen={openWindow}
                />

                <FolderShortcut
                    title="Notepad"
                    windowKey="notepad"
                    icon="/notepad-95.png"
                    onOpen={openWindow}
                />

                <Taskbar
                    openWindows={openWindows}
                    activeWindow={activeWindow}
                    setActiveWindow={setActiveWindow}
                    onToggleWindow={toggleFromTaskbar}
                    onOpenWindow={openWindow}
                />
            </div>

            {/* Open Windows */}
            {openWindows.map((key, index) => {
                console.log("Rendering window:", key);
                // SPECIAL WINDOW
                if (key === "notepad") {
                    return (
                        <GeneralNotepad
                            key="notepad"
                            id="notepad"
                            zIndex={zIndexes["notepad"] || 1}
                            isActive={activeWindow === "notepad"}
                            onClose={closeWindow}
                            onFocus={focusWindow}
                        />
                    );
                }

                // SAFETY GUARD
                if (!windowsData[key]) return null;

                // GENERIC WINDOW
                return (
                    <Window
                        key={key}
                        id={key}
                        title={windowsData[key].title}
                        content={windowsData[key].content}
                        onClose={closeWindow}
                        onFocus={focusWindow}
                        zIndex={zIndexes[key] || 1}
                        initialPosition={{
                            x: 140 + index * 30,
                            y: 100 + index * 30,
                        }}
                    />
                );
            })}

        </div>
    );
}
