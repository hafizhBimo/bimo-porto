import AboutContent from "@/components/WindowContent/AboutContent";
import ExperienceContent from "@/components/WindowContent/ExperienceContent";
import EducationContent from "@/components/WindowContent/EducationContent";
import SkillsContent from "@/components/WindowContent/SkillContent";
import GeneralNotepadContent from "@/components/WindowContent/GeneralNotepadContent";

export const WINDOWS_CONFIG = {
  about: {
    id: "about",
    title: "About Me",
    icon: "/star-95.png",
    component: AboutContent,
    showShortcut: true,
  },
  experience: {
    id: "experience",
    title: "Experience",
    icon: "/folder-95.png",
    component: ExperienceContent,
    showShortcut: true,
  },
  education: {
    id: "education",
    title: "Education",
    icon: "/books-95.png",
    component: EducationContent,
    showShortcut: true,
  },
  skills: {
    id: "skills",
    title: "Skills",
    icon: "/folder-95.png",
    component: SkillsContent,
    showShortcut: true,
  },
  notepad: {
    id: "notepad",
    title: "General - Notepad",
    icon: "/notepad-95.png",
    component: GeneralNotepadContent,
    showShortcut: true,
    initialWindowWidth: "w-130",
  },
};
