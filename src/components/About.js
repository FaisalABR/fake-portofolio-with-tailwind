import React from "react";
import IcalImg from "../assets/foto-diri.JPG";

const About = () => {
  return (
    <div className="mb-3 lg:px-28 max-w-full">
      <h1 className="text-center text-5xl font-ibm my-5 text-emerald-500 font-bold ">
        About Me
      </h1>
      <div className="w-80 lg:w-full flex flex-col lg:flex-row lg:h-80 shadow-md lg:shadow-md rounded-xl mx-auto">
        <img
          src={IcalImg}
          alt="foto diri"
          className="w-auto h-full rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none object-cover"
        />
        <p className="font-jakarta px-4 py-4 lg:h-80 lg:text-2xl lg:font-light dark:text-zinc-50">
          I'm a second-year student at university. Who loves programming, video
          games, and books. I pursuing web development, especially in the
          Front-end field. I am interested in machine learning and software
          engineering. I hope I can build a software company in the future.
        </p>
      </div>
    </div>
  );
};

export default About;
