import { SiJava, SiReact, SiGit, SiCsharp, SiHtml5, SiNodeDotJs, SiNextDotJs } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaFigma, FaLinux } from "react-icons/fa";

export const Skills = [
  {
    slug: "html5",
    Component: FaHtml5,
    title: "Html5",
    Description: () => <></>
  },
  {
    slug: "css3",
    Component: FaCss3Alt,
    title: "CSS3",
    Description: () => <></>
  },
  {
    slug: "nextjs",
    Component: SiNextDotJs,
    title: "Nextjs",
    Description: () => <></>,
  },
  {
    slug: "C#",
    Component: SiCsharp,
    title: "C#",
    Description: () => <> </>,
  },
  {
    slug: "react",
    Component: SiReact,
    title: "Reactjs",
    Description: () => <></>,
  },
  {
    slug: "nodejs",
    Component: SiNodeDotJs,
    title: "Nodejs",
    Description: () => <></>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <></>,
  },
  {
    slug: "figma",
    Component: FaFigma,
    title: "Figma",
    Description: () => <></>,
  },
  {
    slug: "linux",
    Component: FaLinux,
    title: "Linux",
    Description: () => <></>,
  },
];
