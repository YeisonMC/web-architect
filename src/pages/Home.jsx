import React from "react";
import ImageBody from "../assets/images/fondo-home.jpg";

const Home = () => {
  return (
    <>
      <div className="">
        {/* <div
          className="h-screen bg-cover bg-center relative flex items-center justify-center"
          style={{
            backgroundImage: `url(${ImageBody})`,
            filter: "brightness(0.6)",
          }}
        ></div> */}
        <div
          className="h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${ImageBody})`,
            filter: "brightness(0.6)",
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-7xl font-bold mb-4 ">
            <p className="scale-up-vertical-top">Bienvenido a</p>
            <p className="scale-up-vertical-top">nuestra página</p>
            de servicios de arquitectura
          </h1>
          <p className="text-lg">
            Aquí encontrarás los mejores servicios de diseño arquitectónico para
            tu proyecto.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
