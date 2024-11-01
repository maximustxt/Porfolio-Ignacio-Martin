import React, { useContext } from "react";
import Context from "../../Context/Themes";
import BlobBlur from "../BlobBlur/BlobBlur";
import Titles from "../Title/index";
import { methodContact, redes } from "../../data/contact";
import { BsArrowUpRight } from "react-icons/bs";
import cv from "../../assets/CV_IGNACIO_MARTIN_2024.pdf";
import "./index.css";

export default function Contact() {
  const { Themes } = useContext(Context);

  return (
    <div className="w-full py-5 min-h-[300px] relative " id="contact">
      <BlobBlur
        positionStyles={{
          top: "-100px",
          left: "-50px",
          height: "300px",
          width: "70%",
          opacity: "0.5",
        }}
      />
      <Titles Themes={Themes} title="Contacto" />
      <div className="flex flex-col justify-center">
        <div style={{ color: Themes.text }}>
          <div className="py-10 flex sm:flex-row justify-between flex-col">
            <div className="content-method-contact">
              {methodContact.map(({ href, method, title }) => (
                <div key={method} className="contact-method">
                  <h5 className="font-semibold mb-2 sm:text-2xl text-sm capitalize">
                    {method}:
                  </h5>
                  <a
                    href={href}
                    className="flex items-center font-medium text-sm link-contect"
                  >
                    {title}
                    <span className="text-xs ml-1">
                      {" "}
                      <BsArrowUpRight />
                    </span>
                  </a>
                </div>
              ))}
              <div>
                <h5 className="font-semibold mt-5 mb-2 sm:text-2xl text-sm capitalize">
                  Curriculum:
                </h5>
                <a
                  href={cv}
                  className="flex items-center font-medium text-sm link-contect"
                  download
                >
                  Descargar curriculum
                  <span className="text-xs ml-1">
                    <BsArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:ml-7 sm:mt-0 mt-11">
              <h5 className="font-semibold sm:text-2xl  text-sm mb-2">
                Mis redes:
              </h5>

              <ul className="flex">
                {redes.map(({ red, link, icon }) => (
                  <li key={red} className="text-[26px] footer-redes">
                    <a href={link}>{icon}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
