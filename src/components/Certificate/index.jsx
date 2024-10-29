import Titles from "../Title/index";
import React, { useContext } from "react";
import Context from "../../Context/Themes";
import CertificadoHenry from "../../assets/CertificadoDeHenry.png";
import CertificadoHenryJava from "../../assets/CertificadoJava.png";
import CertificadoCoderHouse from "../../assets/CertificadoDeCoderHouse.png";
import CertificadoRedesEducacionIT from "../../assets/CertificadoRedesEducacionIT.png";

const Certificate = () => {
  const { Themes } = useContext(Context);
  return (
    <div className="mb-[60px] mt-[60px]" id="Certificate">
      <Titles Themes={Themes} title="Certificados" />
      <div className="flex flex-col items-center justify-center ">
        <img
          className="mx-auto my-auto w-[600px] h-[500px] object-contain"
          src={CertificadoHenry}
        />
        <img
          className="mx-auto my-auto w-[600px] h-[500px] object-contain"
          src={CertificadoCoderHouse}
        />
        <br />
        <img
          className="mx-auto my-auto w-[600px] h-[500px] object-contain"
          src={CertificadoRedesEducacionIT}
        />
        <br />
        <img
          className="mx-auto my-auto w-[600px] xl:h-[380px] object-contain bg-yellow-200"
          src={CertificadoHenryJava}
        />
      </div>
    </div>
  );
};

export default Certificate;
