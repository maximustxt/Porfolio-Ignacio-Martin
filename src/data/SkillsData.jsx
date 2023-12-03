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
  DiJava,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiTypescript,
  SiSpringboot,
  SiSvelte,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const skills = [
  {
    skill: "HTML",
    color: "red",
    icon: <DiHtml5 />,
    inProcess: false,
  },
  {
    skill: "CSS",
    color: "blue",
    icon: <DiCss3 />,
    inProcess: false,
  },
  {
    skill: "JavaScript",
    color: "yellow",
    icon: <DiJavascript />,
    inProcess: false,
  },
  {
    skill: "TypeScript",
    color: "blue",
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
    skill: "Java",
    color: "red",
    icon: <DiJava />,
    inProcess: true,
  },
  {
    skill: "Spring Boot",
    color: "green",
    icon: <SiSpringboot />,
    inProcess: true,
  },
  {
    skill: "Trello",
    color: "aqua",
    icon: <DiTrello />,
    inProcess: false,
  },
  {
    skill: "React",
    color: "aqua",
    icon: <DiReact />,
    inProcess: false,
  },
  {
    skill: "Svelte",
    color: "orangered",
    icon: <SiSvelte />,
    inProcess: false,
  },
  {
    skill: "Redux",
    color: "blueviolet",
    icon: <SiRedux />,
    inProcess: false,
  },
  {
    skill: "Git",
    color: "orangered",
    icon: <BsGit />,
    inProcess: false,
  },
  {
    skill: "GitHub",
    color: "red",
    icon: <AiFillGithub />,
    inProcess: false,
  },
  {
    skill: "Node.js",
    color: "greenyellow",
    icon: <DiNodejsSmall />,
    inProcess: false,
  },
  {
    skill: "PostgreSQL",
    color: "turquoise",
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
