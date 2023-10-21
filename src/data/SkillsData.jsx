import {
  DiJavascript,
  DiCss3,
  DiHtml5,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiAngularSimple,
  DiPostgresql,
  DiTrello,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const skills = [
  {
    skill: "HTML",
    color: "#ff6a00",
    icon: <DiHtml5 />,
    inProcess: false,
  },
  {
    skill: "CSS",
    color: "#0072ff",
    icon: <DiCss3 />,
    inProcess: false,
  },
  {
    skill: "JavaScript",
    color: "#d8ff00",
    icon: <DiJavascript />,
    inProcess: false,
  },
  {
    skill: "TypeScript",
    color: "#3178C6",
    icon: <SiTypescript />,
    inProcess: false,
  },
  {
    skill: "Angular",
    color: "red",
    icon: <DiAngularSimple />,
    inProcess: false,
  },
  {
    skill: "Boostrap",
    color: "#9100ff",
    icon: <SiBootstrap />,
    inProcess: false,
  },
  {
    skill: "Trello",
    color: "#ff6a00",
    icon: <DiTrello />,
    inProcess: false,
  },
  {
    skill: "React",
    color: "#3ec8fd",
    icon: <DiReact />,
    inProcess: false,
  },
  {
    skill: "Redux",
    color: "#573C83",
    icon: <SiRedux />,
    inProcess: false,
  },
  {
    skill: "Git",
    color: "#ff3b00",
    icon: <BsGit />,
    inProcess: false,
  },
  {
    skill: "GitHub",
    color: "#ffebeb",
    icon: <AiFillGithub />,
    inProcess: false,
  },
  {
    skill: "Node js",
    color: "#019722",
    icon: <DiNodejsSmall />,
    inProcess: false,
  },
  {
    skill: "Mongo Db",
    color: "#04ff00",
    icon: <DiMongodb />,
    inProcess: false,
  },
  {
    skill: "PostgreSQL",
    color: "#005c83",
    icon: <DiPostgresql />,
    inProcess: false,
  },
];

export {
  skills,
  DiJavascript,
  DiCss3,
  SiRedux,
  DiHtml5,
  DiReact,
  SiTailwindcss,
};
