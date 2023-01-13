import React from "react";
import BgImg from "../assets/foto-diri-nobg.png";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col lg:mb-44 max-w-full">
        <div className="flex w-full h-60 justify-around relative lg:px-40">
          <div className="font-ibm text-3xl lg:text-7xl flex flex-col pt-12 lg:pt-24 text-gray-700 dark:text-white">
            <h1>Hi !</h1>
            <h1>My name</h1>
          </div>
          <img src={BgImg} alt="foto no bg" className="absolute lg:w-102" />
          <div className="font-ibm text-3xl lg:text-7xl pt-20  text-emerald-600 z-20">
            <h1>Faisal Abu</h1>
            <h1>Bakar Riza</h1>
          </div>
        </div>
      </div>
      <div className="flex py-5 justify-between lg:justify-center lg:gap-20 px-8 text-5xl  lg:text-6xl rounded-xl mt-3 lg:mt-40 text-gray-700">
        <AiFillTwitterCircle className="duration-500 hover:text-cyan-600  dark:text-zinc-50 dark:hover:text-cyan-600 " />
        <AiFillInstagram className="duration-500 hover:text-pink-600 dark:text-zinc-50 dark:hover:text-pink-600" />
        <AiFillGithub className="duration-500 hover:text-indigo-800 dark:text-zinc-50 dark:hover:text-indigo-800" />
      </div>
    </>
  );
};

export default Hero;
