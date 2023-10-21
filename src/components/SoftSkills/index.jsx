import React, { useContext, useEffect } from "react";
import Titles from "../Title";
import Context from "../../Context/Themes";
import CardSoftSkill from "./CardSoftSkills";
import {
  GiInspiration,
  GiProgression,
  GiTeamIdea,
  GiTeamUpgrade,
} from "react-icons/gi";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { VscCommentUnresolved } from "react-icons/vsc";
import { FaLaptopCode } from "react-icons/fa";
import "./index.css";

export default function SoftSkills() {
  const { Themes } = useContext(Context);
  useEffect(() => {
    console.log(Themes);
  }, []);
  return (
    <section className="min-h-[440px] py-5 relative">
      <Titles title="Habilidades blandas" Themes={Themes} />
      <div className="flex flex-col items-center w-full">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1">
          <CardSoftSkill
            text="Adaptabilidad"
            icon={<GiProgression />}
            description="Me adapto muy rápidamente a cualquier tecnología o herramienta que sale en el día a día."
          />
          <CardSoftSkill
            text="Trabajo en equipo"
            icon={<GiTeamIdea />}
            description="Me gusta trabajar en equipo , poder aportar ayuda cuando me necesitan y poder pedir ayuda cuando lo necesito, poder hablar y solucionar problemas juntos es clave."
          />
          <CardSoftSkill
            text="Comunicación"
            icon={<MdOutlineEmojiPeople />}
            description="Siento una fuerte inclinación para compartir mis pensamientos y opiniones de manera constructiva."
          />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1">
          <CardSoftSkill
            text="Resolución de problemas"
            icon={<VscCommentUnresolved />}
            description="Resuelvo problemas con una gran calidad, escribiendo código limpio y entendible para otros desarrolladores."
          />
          <CardSoftSkill
            text="Creatividad"
            icon={<GiInspiration />}
            description="Mi gran creatividad me lleva a crear software con una experiencia de usuario agradable."
          />
          <CardSoftSkill
            text="Agilidad"
            icon={<FaLaptopCode />}
            description="Tengo una gran agilidad para desenvolver cualquier inconveniente que surja."
          />
        </div>
      </div>
      <div />
    </section>
  );
}
