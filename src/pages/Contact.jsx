import React from "react";
import { LabelForm } from "../components/iu/LabelForm";
import { InputForm } from "../components/iu/InputForm";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <nav className=" bg-slate-100" id="contact">
      <div className="pt-10 max-md:mb-10 max-w-7xl w-11/12 mx-auto">
        {/* <h1 className="text-3xl mb-7">Escríbenos</h1> */}
        <form
          className="max-sm:w-full max-w-xl bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 mx-auto"
          data-aos="fade-up"
          data-aos-duration="1300"
        >
          <div className="mb-4">
            <LabelForm htmlFor="nombre">Nombre</LabelForm>
            <InputForm
              id="nombres"
              name="nombre"
              type="text"
              // placeholder="Ingresa tu nombre"
            ></InputForm>
          </div>
          <div className="mb-4">
            <LabelForm htmlFor="apellidos">Apellidos</LabelForm>
            <InputForm
              id="apellidos"
              name="apellidos"
              type="text"
              // placeholder="Ingresa tu nombre"
            ></InputForm>
          </div>
          <div className="mb-4">
            <LabelForm htmlFor="email">Email</LabelForm>
            <InputForm
              id="email"
              name="email"
              type="email"
              // placeholder="Ingresa tu nombre"
            ></InputForm>
          </div>
          <div className="mb-4">
            <LabelForm htmlFor="email">Email</LabelForm>
            <textarea
              name="mensaje"
              placeholder="Escribe"
              className="w-full px-4 py-3 max-h-36 h-24 resize-y text-black bg-white border border-gray-200 rounded-xl appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              maxLength={150}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <LabelForm htmlFor="email">Política de privacidad</LabelForm>
            <div className="flex gap-3 items-center">
              <input type="checkbox" />
              <p>He leído y acepto la política de privacidad</p>
            </div>
          </div>
          <button className="bg-black text-white px-5 py-2 rounded-md">
            Enviar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Contact;
