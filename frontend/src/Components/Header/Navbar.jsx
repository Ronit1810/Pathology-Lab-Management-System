// import React from 'react'
import Logo from "../../assets/Logo.png";

function Navbar() {
  return (
    <div className=" border-b-[1px] px-10 flex items-center justify-between">

      <div className="">
        <img className=" w-20 h-12" src={Logo} alt="Logo image" />
      </div>

      <div className=" flex gap-10 pr-16 font-normal text-gray-500">

        <h1 className=" hover:text-[#102C57] cursor-pointer font-semibold">
          Create New
        </h1>

        <h1 className=" hover:text-[#102C57] cursor-pointer font-semibold">
          Report
        </h1>

        <h1 className=" hover:text-[#102C57] cursor-pointer font-semibold">
          Add Test
        </h1>

      </div>

    </div>
  );
}

export default Navbar;
