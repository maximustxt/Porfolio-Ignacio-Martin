import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const redes = [
  {
    red: "Linkedin",
    link: "https://www.linkedin.com/in/ignacio-martin-339542263/",
    icon: <AiFillLinkedin />,
  },
  {
    red: "Git Hub",
    link: "https://github.com/maximustxt",
    icon: <AiFillGithub />,
  },
  {
    red: "Youtube",
    link: "https://www.youtube.com/channel/UCIY9uY5sIJszOOM-oKIiHTA",
    icon: <AiFillYoutube />,
  },
];

const methodContact = [
  {
    method: "email",
    href: "mailto:ignamartin2020@gmail.com",
    title: "ignamartin2020@gmail.com",
  },
];

export { methodContact, redes };
