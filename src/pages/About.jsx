import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <nav
        id="about"
        className="my-10"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h1 class="text-center font-medium text-3xl">
          NOSOTROS <b class="text-[#c70303]">¡SOMOS LA MEJOR OPCIÓN!</b>
        </h1>
        {/* sm:bg-black bg-green-300: md:bg-violet-400 lg:bg-red-300 xl:bg-cyan-300 */}
        <div className="mt-6 grid grid-cols-1 gap-3 xl:grid-cols-2 xl:gap-10  md:grid-cols-1 ">
          <div className="">
            <h1 class="text-2xl mb-2">
              Sobre
              <b class="text-[#c70303] font-medium uppercase">Nosotros</b>
            </h1>
            <p className="text-[#354659] text-justify">
              Inversiones Inkato brinda servicios de consultoría en diferentes
              tipos de especialidades relacionados a la industria del diseño y
              la construcción, de igual manera brindamos soluciones
              constructivas tales como remodelación, implementación,
              construcción, y mantenimiento de diferentes tipos de
              infraestructuras.
            </p>
            <div className="mt-6">
              <h1 class="text-2xl mb-2">
                Nuestra
                <b class="text-[#c70303] font-medium uppercase">MISIÓN</b>
              </h1>
              <p className="text-[#354659] text-justify">
                Brindamos el uso adecuado de nuevas tecnologías para asegurar la
                mejora de la infraestructura vial, mediante la innovación e
                investigación, tecnología y capacitando a profesionales en el
                ámbito de la infraestructura vial.
              </p>
            </div>
            <div className="mt-6">
              <h1 class="text-2xl mb-2">
                Nuestra
                <b class="text-[#c70303] font-medium uppercase">VISIÓN</b>
              </h1>
              <p className="text-[#354659] text-justify">
                Brindamos soluciones para establecer y resguardar la
                infraestructura vial en el país.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://i.pinimg.com/236x/11/44/4f/11444f6919d34fae88d70a8ab6f42013.jpg"
              className="w-full"
            />
            <img
              src="https://i.pinimg.com/564x/f3/0e/02/f30e024a4ada78848ac9849315847acb.jpg"
              alt=""
              className="w-full h-full"
            />
            <img
              src="https://i.pinimg.com/564x/d6/15/50/d615505c734bcbcf0c847765062736f2.jpg"
              alt=""
              className="w-full"
            />
            <img
              src="https://i.pinimg.com/236x/c7/db/eb/c7dbeb71c2a8876c0d469f4fdc5e77e1.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>

          {/* <div>
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
          </div> */}

          {/* <div className="grid gap-10 max-md:gap-4 mt-16">
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
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default About;
