import React from "react";

const Services = () => {
  return (
    <nav className="md:h-screen bg-slate-600" id="service">
      <div className="pt-10 max-w-7xl w-11/12 mx-auto ">
        <div className="flex justify-between max-md:flex-col ">
          <div className="bg-violet-300 max-md:mx-auto max-md:mb-10">
            <img
              className="h-full"
              src="https://i.pinimg.com/564x/9b/1c/e0/9b1ce02f407cd9245e087829b100b72c.jpg"
              alt=""
            />
          </div>
          <div className="bg-blue-300">
            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
              <div class="bg-gray-200 p-4">
                <img
                  className="w-72 max-md:w-48"
                  src="https://i.pinimg.com/564x/ee/44/21/ee442155f0abfc5f375e250e5725f836.jpg"
                  alt=""
                />
              </div>
              <div class="bg-gray-200 p-4">
                <img
                  className="w-72 max-md:w-48"
                  src="https://i.pinimg.com/236x/dd/73/6b/dd736b8665a9b10aabfe6130a84795b6.jpg"
                  alt=""
                />
              </div>
              <div class="bg-gray-200 p-4">
                <img
                  className="w-72 max-md:w-48"
                  src="https://i.pinimg.com/564x/30/fd/fd/30fdfd121bb2074db9a4a458779631ef.jpg"
                  alt=""
                />
              </div>
              <div class="bg-gray-200 p-4">
                <img
                  className="w-72 max-md:w-48"
                  src="https://i.pinimg.com/564x/ff/59/ff/ff59fffaf2e32f420e4deee71774afe7.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Services;
