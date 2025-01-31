import React, { useEffect, useState } from "react";

const Home = () => {
  const [isvisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="  flex relative  items-center justify-center w-full  ">
      <div className=" flex flex-col flex-wrap absolute items-center justify-center w-full mx-5 ">
        <h1
          className={`font-bold text-2xl  md:text-[45px] lg:text-[50px] sm:text-[35px] text-white shadow-sm antialiased mb-5 lg:mt-5 transition-all duration-700 ease-in-out transform ${
            isvisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          Journey Through the Realms
        </h1>
        <h1
          className={`font-bold text-2xl  md:text-[45px] lg:text-[50px] sm:text-[35px] text-white shadow-sm antialiased mb-5 lg:mt-5 transition-all duration-700 ease-in-out transform ${
            isvisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          of Knowledge
        </h1>
        <div className="flex mx-10">
          <h3
            className={`font-serif text-sm  md:text-lg text-white transition-all duration-700 ease-in-outtranslate-y-0 opacity-100 transform ${
              isvisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Uncover the extraordinary as we navigate through stories that ignite
            curiosity, spark imagination.
          </h3>
        </div>
      </div>
      <div className="hidden sm:w-full sm:block">
        <img src="/home.jpg" alt="home-logo" className="w-full " />
      </div>
      <div className="sm:hidden w-full ">
        <img src="/home-moble.jpg" alt="home-logo" className="w-full " />
      </div>
    </div>
  );
};

export default Home;
