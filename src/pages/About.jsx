import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <nav className="md:h-screen " id="about">
        <div className="pt-10 max-w-7xl w-11/12 mx-auto">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div
                className="w-full md:w-1/2 px-4 mb-8 md:mb-0"
                data-aos="fade-up"
                data-aos-duration="1300"
              >
                <h2 className="text-4xl font-bold mb-4">Quiénes somos</h2>
                <p className="text-lg leading-relaxed">
                  Somos una empresa de arquitectura comprometida con la
                  excelencia en el diseño y la innovación. Desde nuestra
                  fundación en 2005, hemos estado creando espacios excepcionales
                  que inspiran y transforman. Nuestro equipo de arquitectos
                  altamente calificados y apasionados está dedicado a cumplir
                  con las expectativas más altas de nuestros clientes.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-4" data-aos="fade-up">
                <img
                  src="https://st3.depositphotos.com/1007034/12671/i/450/depositphotos_126713306-stock-photo-architecture-project-in-progress.jpg"
                  alt="Equipo"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="mt-16" data-aos="fade-up">
              <h3 className="text-3xl font-bold mb-4">Nuestro equipo</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0V7fcsKsKHQ0iDrIS9o1VOzjIo0VNddR24ZGuln3nA&s"
                    alt="Miembro del equipo"
                    className="rounded-full w-24 h-24 mx-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold mb-2">
                    Nombre Apellido
                  </h4>
                  <p className="text-gray-600">Arquitecto principal</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KmtSaB4HlhstRs7iyD69rUdhT6xCsfpVCOAn7aRrJA&s"
                    alt="Miembro del equipo"
                    className="rounded-full w-24 h-24 mx-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold mb-2">
                    Nombre Apellido
                  </h4>
                  <p className="text-gray-600">Arquitecto de diseño</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwssTKlGwmr8lCsNNbNdQVUdils7wtdwU25MRaFp1QeQ&s"
                    alt="Miembro del equipo"
                    className="rounded-full w-24 h-24 mx-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold mb-2">
                    Nombre Apellido
                  </h4>
                  <p className="text-gray-600">Arquitecto paisajista</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default About;
