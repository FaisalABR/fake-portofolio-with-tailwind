import React from "react";
import coding from "../assets/coding.jpg";
import consulting from "../assets/consulting.jpg";
import design from "../assets/design.jpg";

const Service = () => {
  return (
    <div className="flex flex-col my-12 max-w-full">
      <h1 className="text-5xl text-center font-ibm text-emerald-500 my-3">
        My Service
      </h1>
      <div className="flex flex-wrap">
        <div className="flex flex-col justify-center items-center w-72 mx-auto p-2 rounded-md shadow-md font-jakarta transition-all hover:-translate-y-3">
          <img
            src={coding}
            alt="Code"
            className="w-2/3 shadow-sm rounded-full my-3"
          />
          <p className="text-2xl text-green-500 font-bold my-2">
            Code your project!
          </p>
          <p className="text-center dark:text-zinc-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            accusamus fugiat quo cum? Et dignissimos saepe
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-72 mx-auto p-2 rounded-md shadow-md font-jakarta transition-all hover:-translate-y-3">
          <img
            src={design}
            alt="design"
            className="w-2/3 shadow-sm rounded-full"
          />
          <p className="text-2xl text-green-500 font-bold my-2">Design</p>
          <p className="text-center dark:text-zinc-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            accusamus fugiat quo cum? Et dignissimos saepe
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-72 mx-auto p-2 rounded-md shadow-md font-jakarta transition-all hover:-translate-y-3">
          <img
            src={consulting}
            alt="consulting"
            className="w-2/3 shadow-sm rounded-full"
          />
          <p className="text-2xl text-green-500 font-bold my-2">Consulting</p>
          <p className="text-center dark:text-zinc-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            accusamus fugiat quo cum? Et dignissimos saepe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
