// import React from 'react'
import { useState } from "react";
import Logo from "../../assets/Logo.png";
import menu from "../../assets/menu.png";
import Model from "../Model/CreateNewModel";
import HamburgerModel from "../Model/HamburgerModel";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [testMenu, setTestMenu] = useState(false)
  return (
    <div className=" bg-[#EADBC8] h-20 border-b-[1px] px-10 md:px-20 flex items-center justify-between">
      <div className="">
        <img className=" w-20 h-12" src={Logo} alt="Logo image" />
      </div>

      <div className=" hidden md:flex gap-10 pr-16 font-normal text-gray-500">
        <h1
          className=" hover:text-[#102C57] cursor-pointer font-semibold"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          Create New
        </h1>

        <h1 className=" hover:text-[#102C57] cursor-pointer font-semibold">
          Report
        </h1>

        <h1 className=" hover:text-[#102C57] cursor-pointer font-semibold" onClick={()=> {setTestMenu(prev => !prev)}}>
          Add Test
        </h1>
      </div>
      <img
        className=" w-6 h-6 md:hidden cursor-pointer"
        onClick={() => {
          setMenuOpen((prev) => !prev);
        }}
        src={menu}
      />

      {/* Create New model */}
      {isOpen && <Model setIsOpen={setIsOpen} />}

      {/* hamburger Menu on Mobile View */}
      {menuOpen && (
        <HamburgerModel setIsOpen={setIsOpen} setMenuOpen={setMenuOpen} />
      )}

      {testMenu && (
        <div className=" flex justify-center items-center w-full h-full fixed top-0 left-0 bg-[rgba(168,169,168,0.5)]">
        <div className=" bg-white w-[75%] md:w-[50%] h-[80%] rounded-md">
          <div className="flex justify-between px-3 md:p-5">
            <div className="text-2xl text-[#102C57] font-semibold">
              Add Test
            </div>
            <div className="cursor-pointer text-2xl font-bold" onClick={()=> {setTestMenu(prev => !prev)}}>X</div>
          </div>
          <div className=" justify-center flex p-5">
            <form
              className=" items-center flex-col justify-center flex gap-8"
              action=""
            >
              <div className=" flex gap-4">
                <div>
                  <h4>Test Name</h4>
                  <input
                    className=" outline-none border-[2px] rounded-md px-3 py-1 border-[#102C57] w-72"
                    type="text"
                  />
                </div>
                <div>
                  <h4>Test Description</h4>
                  <input
                    className=" outline-none border-[2px] rounded-md px-3 py-1 border-[#102C57] w-72"
                    type="text"
                  />
                </div>
              </div>
              <div className=" flex gap-4">
                <div>
                  <h4>Test Image Link</h4>
                  <input
                    className=" outline-none border-[2px] rounded-md px-3 py-1 border-[#102C57] w-72"
                    type="text"
                  />
                </div>
                <div>
                  <h4>Test Price</h4>
                  <input
                    className=" outline-none border-[2px] rounded-md px-3 py-1 border-[#102C57] w-72"
                    type="text"
                  />
                </div>
              </div>
              <div className=" flex gap-4">
                <div>
                  <h4>Fasting</h4>
                  <input
                    className=" outline-none border-[2px] rounded-md px-3 py-1 border-[#102C57] w-72"
                    type="text"
                  />
                </div>
                <div>
                  <h4>Normal range</h4>
                  <input
                    className=" outline-none border-[2px] rounded-md px-3 py-1 border-[#102C57] w-72"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <h4>Abnormal range</h4>
                <input
                  className=" outline-none border-[2px] rounded-md px-3 py-1 border-[#102C57] w-72"
                  type="text"
                />
              </div>
              <button
                className=" w-28 items-center border-[2px] border-[#102C57] rounded-lg px-5 py-2 hover:text-white hover:bg-[#102C57]"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      )}

      
    </div>
  );
}

export default Navbar;
