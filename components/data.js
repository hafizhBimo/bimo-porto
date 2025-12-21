import AboutContent from "./WindowContent/AboutContent";
import ExperienceContent from "./WindowContent/ExperienceContent";
import EducationContent from "./WindowContent/EducationContent";
import SkillsContent from "./WindowContent/SkillContent";
import GeneralNotepad from "./WindowContent/GeneralNotepadContent";

export const windowsData = {
    about: {
        title: "About Me",
        content: <AboutContent />,
    },
    experience: {
        title: "Experience",
        content: <ExperienceContent />,
    },
    education: {
        title: "Education",
        content: <EducationContent />,
    },
    skills: {
        title: "Skills",
        content: <SkillsContent />,
    },
};
