import React, { useContext } from "react";
import Context from "../../Context/Themes";
import CertificadoCoderHouse from "../../assets/CertificadoDeCoderHouse.png";
import CertificadoHenry from "../../assets/CertificadoDeHenry.png";
import Titles from "../Title/index";

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
      </div>
    </div>
  );
};

export default Certificate;
