import React, { useState } from "react";
import "../assets/styles/navbar.css";
import LogoInkato from "../assets/images/home/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* SE PUEDE PONER EL FIX PARA  DESKTOP */}
      {/* SE ELIMINO EL FIXED Y SE COLOGO EL ABSOLUTE PARA QUE ESTE POR ENCIMA*/}
      <nav className="absolute top-0 left-0 z-10 w-full flex items-center justify-between py-5 px-10 max-md:px-5 max-md:bg-[rgba(0,0,0,.1)] bg-[#2F4C75]">
        <a href="#" className="text-2xl text-white font-bold">
          <img className="w-28 h-20" src={LogoInkato} alt="" />
          {/* <h1>INKATOS</h1> */}
        </a>

        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
          <div
            className={`menu_btn  ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span className="line top_line"></span>
            <span className="line middle_line"></span>
            <span className="line bottom_line"></span>
          </div>
        </label>
        <ul className="flex gap-10 max-md:block max-md:absolute max-md:top-full max-md:left-0 max-md:w-full px-6 max-md:bg-[rgba(0,0,0,.1)] max-md:backdrop-blur-2xl max-md:shadow-xl">
          <li className="max-md:my-3">
            <a href="#about" className="font-medium max-md:text-xl text-white">
              Nosotros
            </a>
          </li>
          <li className="max-md:my-3">
            <a
              href="#service"
              className="font-medium max-md:text-xl text-white"
            >
              Servicios
            </a>
          </li>
          <li className="max-md:my-3">
            <a href="#" className="font-medium max-md:text-xl text-white">
              Proyectos
            </a>
          </li>
          <li className="max-md:my-3">
            <a
              href="#contact"
              className="font-medium max-md:text-xl text-white"
            >
              Contactanos
            </a>
          </li>
        </ul>
      </nav>
      {/* <script>
        const menuBtn= document.querySelector('.menu_btn')
        menuBtn.addEventListener('click', ()=>{menuBtn.classList.toggle("open")}
        )
      </script> */}
    </>
  );
};

export default Navbar;
