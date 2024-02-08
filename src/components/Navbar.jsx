import React, { useState } from "react";
import "../assets/styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-10 w-full flex items-center justify-between py-5 px-10">
        <a className="text-2xl text-white font-bold">Inkato</a>
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
        <ul className="flex gap-10 max-md:block max-md:absolute max-md:top-full max-md:left-0 max-md:w-full max-md:bg-slate-50 px-6 max-md:bg-[rgba(0,0,0,.1)] max-md:backdrop-blur-3xl max-md:shadow-xl ">
          <li className="max-md:my-3">
            <a href="#about" className="font-medium  max-md:text-xl">
              Nosotros
            </a>
          </li>
          <li className="max-md:my-3">
            <a href="#service" className="font-medium ">
              Servicios
            </a>
          </li>
          <li className="max-md:my-3">
            <a href="#" className="font-medium ">
              Proyectos
            </a>
          </li>
          <li className="max-md:my-3">
            <a href="#contact" className="font-medium ">
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
