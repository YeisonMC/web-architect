import React from "react";
import Logo from "../assets/images/home/logo-2.png";

import FooterRedes from "./iu/FooterRedes";

const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-100 ">
        <div className="pt-5  max-w-full w-11/12 mx-auto mb-5">
          <div className="grid gap-10 max-md:gap-4 md:grid-cols-4">
            <div className="col-span-4 md:col-span-2">
              <div className="">
                <a href="" className="mb-6 flex items-center">
                  <img className="w-12" src={Logo} alt="logo" />
                  <p className="ml-4 text-xl font-semibold">Inkato S.A.C</p>
                </a>
                <p className="md:w-3/5">
                  Especialistas en arquitectura y diseño, ofrecemos soluciones
                  integrales para proyectos residenciales, comerciales e
                  industrialesm convertir tus visiones en realidad con calidad y
                  profesionalismo.
                </p>
                <div className="flex items-center mt-3">
                  <FooterRedes>
                    <svg width="12" height="19" viewBox="0 0 8 16">
                      <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                    </svg>{" "}
                  </FooterRedes>

                  <FooterRedes>
                    <svg width="16" height="12" viewBox="0 0 16 12">
                      <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                    </svg>
                  </FooterRedes>
                  <FooterRedes>
                    {/* <img src={InstagramIcon} alt="" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="22"
                      viewBox="0 0 30 30"
                    >
                      <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                    </svg>
                  </FooterRedes>
                </div>
                {/* <div className="mt-3 flex gap-3 items-center">
                  <img className="w-6" src={CellIcon} />
                  <span>+51 956 912 410</span>
                </div> */}
              </div>
            </div>
            {/* <div className="bg-amber-300 max-md:col-span-2 max-md:row-span-1 max-md:mt-5">
              <div className="flex flex-col">
                <h2 class="list-none mb-5 font-medium text-xl">Servicios</h2>
                <li class="list-none mb-2">Planos Arquitectónicos</li>
                <li class="list-none mb-2">Recorridos 3D</li>
                <li class="list-none mb-2">Diseño Interior</li>
                <li class="list-none mb-2">Consultoría en Arquitectura</li>
                <li class="list-none mb-2">Estudios de Viabilidad</li>
              </div>
            </div> */}
            <div className="max-md:col-span-2 max-md:row-span-1 max-md:mt-5 ">
              <div className="flex flex-col  ">
                <h2 className="list-none mb-5 font-medium text-xl">Empresa</h2>
                <li className="list-none mb-2">Acerca de Nosotros</li>
                <li className="list-none mb-2">Contacto y Soporte</li>
                <li className="list-none mb-2">Historial de Éxito</li>
                <li className="list-none mb-2">Configuración y Privacidad</li>
              </div>
            </div>
            <div className="max-md:col-span-4 max-md:mt-5">
              <div className="flex flex-col ">
                <h2 className="list-none mb-5 font-medium text-xl">Legal</h2>
                <li className="list-none mb-2">Política de Privacidad</li>
                <li className="list-none mb-2">Términos y Condiciones</li>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-200 py-4 text-center">
          <span>© 2024: </span>
          <a
            className="font-normal text-neutral-600"
            href="https://tw-elements.com/"
          >
            Inversiones Inkato
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
