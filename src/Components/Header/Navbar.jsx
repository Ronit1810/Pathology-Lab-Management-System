// import React from 'react'
import { useState } from "react";
import Logo from "../../assets/Logo.png";
import menu from "../../assets/menu.png";
import Model from "../Model/CreateNewModel";
import HamburgerModel from "../Model/HamburgerModel";
import AddTestModel from "../Model/AddTestModel";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [testMenu, setTestMenu] = useState(false)
  return (
    <div className=" bg-[#EADBC8] h-20 border-b-[1px] px-10 md:px-20 flex items-center justify-between">
      <Link to='/' className="">
        <img className=" w-20 h-12" src={Logo} alt="Logo image" />
      </Link>

      <div className=" hidden md:flex gap-10 pr-16 font-normal text-gray-500">
        <h1
          className=" hover:text-[#102C57] cursor-pointer font-semibold"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          Create New
        </h1>

        <Link to='/status' className=" hover:text-[#102C57] cursor-pointer font-semibold">
          Report
        </Link>

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
        <HamburgerModel setIsOpen={setIsOpen} setMenuOpen={setMenuOpen} setTestMenu={setTestMenu} />
      )}

      {/* Add New Test */}
      {testMenu && (
        <AddTestModel setTestMenu={setTestMenu} />
      )}

      
    </div>
  )
}

export default Navbar;
