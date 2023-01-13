import React from "react";
import { RiMoonClearFill } from "react-icons/ri";

const Navbar = ({ eve }) => {
  console.log(eve);
  return (
    <div className="flex justify-between px-10 items-center py-10 lg:px-32 max-w-full">
      <h1 className="text-2xl lg:text-4xl text-green-500 font-ibm">SalTech</h1>
      <div className="flex items-center text-gray-700 gap-8">
        <RiMoonClearFill
          className=" text-4xl cursor-pointer transition-all hover:text-emerald-300 hover:-translate-y-1 dark:text-emerald-400"
          onClick={eve}
        />
        <p className="bg-gradient-to-r from-emerald-500 to-lime-700 px-3 py-2 text-white rounded-lg cursor-pointer font-jakarta duration-1000 hover:bg-emerald-500">
          Resume
        </p>
      </div>
    </div>
  );
};

export default Navbar;
