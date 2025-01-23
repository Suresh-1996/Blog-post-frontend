import React from "react";

const Home = () => {
  return (
    <div className="  flex relative  items-center justify-center w-full  ">
      <div className=" flex flex-col flex-wrap absolute items-center justify-center w-full mx-5 ">
        <h1 className="font-bold text-lg  md:text-[45px] lg:text-[50px]  text-white shadow-sm antialiased mb-5 lg:mt-5">
          Journey Through the Realms
        </h1>
        <h1 className="font-bold   md:text-[45px] lg:text-[50px] text-white  inline-block font-mono overflow-hidden whitespace-nowrap  animate-typing mb-5 lg:mt-5">
          of Knowledge
        </h1>
        <div className="flex mx-10">
          <h3 className="font-serif text-sm  md:text-lg text-white ">
            Uncover the extraordinary as we navigate through stories that ignite
            curiosity, spark imagination, and bring ideas to life.
          </h3>
        </div>
      </div>
      <div className="w-full ">
        <img src="../public/home.jpg" alt="home-logo" className="w-full " />
      </div>
    </div>
  );
};

export default Home;
