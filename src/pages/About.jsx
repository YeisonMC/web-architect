import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <nav className="md:h-screen" id="about">
        <div className="pt-14 max-w-7xl w-11/12 mx-auto max-md:pt-16 ">
          <div data-aos="fade-up" data-aos-duration="1600">
            <h2 className="text-4xl font-bold mb-6 text-center text-[#001457] max-md:mb-5 ">
              Quiénes somos
            </h2>
            <div className="flex justify-center">
              <p className="text-lg text-[#354659] md:w-2/3 text-justify">
                Inversiones Inkato brinda servicios de consultoría en diferentes
                tipos de especialidades relacionados a la industria del diseño y
                la construcción, de igual manera brindamos soluciones
                constructivas tales como remodelación, implementación,
                construcción, y mantenimiento de diferentes tipos de
                infraestructuras.
              </p>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-8" data-aos="fade-up" data-aos-duration="1300">
              <h2 className="text-4xl font-bold mb-6 text-center text-[#001457] max-md:mb-5 ">
                Quiénes somos
              </h2>
              <div className="">
                <p className="text-lg text-[#354659] max-w-2xl w-full">
                  Somos una empresa de arquitectura comprometida con la
                  excelencia en el diseño y la innovación. Desde nuestra
                  fundación en 2005, hemos estado creando espacios excepcionales
                  que inspiran y transforman. Nuestro equipo de arquitectos
                  altamente calificados y apasionados está dedicado a cumplir
                  con las expectativas más altas de nuestros clientes.
                </p>
              </div>
            </div>
            <div className="" data-aos="fade-up">
              <div className="bg-red-400">
                <img
                  src="https://st3.depositphotos.com/1007034/12671/i/450/depositphotos_126713306-stock-photo-architecture-project-in-progress.jpg"
                  alt="Equipo"
                  className="rounded-lg shadow-lg w-full h-full"
                />
              </div>
            </div>
          </div> */}
          {/* <div className="grid gap-10 max-md:gap-4 md:grid-cols-4"> */}
          <div className="grid gap-10 max-md:gap-4 mt-16">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4">
                <p className="text-center">Calidad</p>
                <p className="mt-5 ">
                  Nuestros proyectos siempre buscan satisfacer sus necesidades
                  del cliente
                </p>
              </div>
              <div className="p-4  px-10">
                <p className="text-center">Seguridad</p>
                <p className="mt-5 ">
                  Día a día nos esforzamos para desarrollar todas las
                  actividades de una manera mas segura y confiable
                </p>
              </div>
              <div className="py-4 px-10">
                <p className="text-center">Compromiso</p>
                <p className="mt-5">
                  Desde el primer día se establece un vínculo sistemático para
                  la escucha de todas sus necesidades.
                </p>
              </div>
              <div className="py-4 px-10">
                <p className="text-center">Adaptabilidad</p>
                <p className="mt-5">
                  Mantenemos una estrategia de negocio flexible concorde a las
                  tendencias y necesidades del mercado
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default About;
