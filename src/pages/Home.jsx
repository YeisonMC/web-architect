import React from "react";
import ImageBody from "../assets/images/home/fondo-home.jpg";
import HomeBackground from "../assets/images/home/home-background.png";
import "../assets/styles/TipoGrafias.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  React.useEffect(() => {
    Aos.init();
  }, []);
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
        {/* <div
          className="h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${ImageBody})`,
            filter: "brightness(0.6)",
          }}
        ></div> */}
        <div
          className="h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${HomeBackground})`,
            filter: "brightness(0.6)",
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <div data-aos="fade-up" data-aos-duration="2000">
            <p className="text-xl max-md:text-4xl font-bold mb-8 block titulos">
              BIENVENIDO
            </p>
            <p className="text-7xl max-md:text-4xl font-bold mb-4 block nav-link">
              INKATO
            </p>
            {/* <p className="text-7xl max-md:text-4xl font-bold mb-4 block sub-titulos">
              CALIDAD TOTAL
            </p> */}

            <button class="cursor-pointer bg-gray-800 px-4 py-4 rounded-full text-white tracking-wider animate-bounce mt-4">
              <svg
                class="w-5 h-5"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>

            <p className="text-lg mt-5">
              Aquí encontrarás los mejores servicios de <br /> diseño
              arquitectónico para tu proyecto.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
