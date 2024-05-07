// import React from 'react'
import { useState } from "react";
import Logo from "../../assets/Logo.png";
import menu from "../../assets/menu.png"

function Navbar() {
  const[isOpen, setIsOpen] = useState(false)
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className=" bg-[#EADBC8] h-20 border-b-[1px] px-10 md:px-20 flex items-center justify-between">

      <div className="">
        <img className=" w-20 h-12" src={Logo} alt="Logo image" />
      </div>

      <div className=" hidden md:flex gap-10 pr-16 font-normal text-gray-500">

        <h1 className=" hover:text-[#102C57] cursor-pointer font-semibold" onClick={() => {setIsOpen(prev=>!prev)}}>
          Create New
        </h1>

        <h1 className=" hover:text-[#102C57] cursor-pointer font-semibold">
          Report
        </h1>

        <h1 className=" hover:text-[#102C57] cursor-pointer font-semibold">
          Add Test
        </h1>

      </div>
      <img className=" w-6 h-6 md:hidden cursor-pointer" onClick={()=>{setMenuOpen(prev=>!prev)}} src={menu}/>

      {/* Create New model */}
      {
        isOpen && <div className=" flex justify-center fixed top-0 left-0 h-screen w-screen bg-[rgba(154,158,160,0.5)]">
          <div className=" border-[2px] border-[#102C57] rounded-lg w-80 h-[600px] md:w-[800px] md:h-[500px] mt-12 md:mt-24 bg-[#f9efe4]">
            <div className=" flex justify-between px-3 md:p-5">
              <div className=" text-2xl text-[#102C57] font-semibold">Create New</div>
              <div className=" cursor-pointer text-2xl font-bold" onClick={() => {setIsOpen(prev=>!prev)}}>X</div>
            </div>
            <div className=" flex p-5 ">
              <form className=" flex flex-col gap-2 justify-center items-center">
                <div className=" md:mb-10 items-center justify-between flex flex-col md:flex-row gap-1 md:gap-3">
                  <label>Name</label>
                  <input className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 w-72" type="text" required placeholder="Enter Name of the Patient" />
                  <label>Mobile</label>
                  <input className="outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 w-72" type="number" required placeholder="Enter Mobile No. of Patient" />
                </div>

                <div className=" md:mb-10 items-center justify-between flex flex-col md:flex-row gap-1 md:gap-3">
                  <label>Address</label>
                  <input className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 w-72" type="text" required placeholder="Enter Adderss of the Patient" />
                  <label>Age</label>
                  <input className="outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 w-72" type="number" required placeholder="Enter Age of Patient" />
                </div>

                <div className=" md:mb-10 items-center justify-between flex flex-col md:flex-row gap-1 md:gap-3">
                  <label>Examined By</label>
                  <input className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 w-72" type="text" required placeholder="Examined Doctor " />
                  <label>Examined Date</label>
                  <input className="outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 w-72" type="date" required placeholder="Enter Age of Patient" />
                </div>

                <div className="md:mb-10 items-center justify-between flex flex-col md:flex-row gap-1 md:gap-3">
                  <label>Setect Test</label>
                  {/* <input className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 w-72" type="text" required placeholder="Examined Doctor " /> */}
                  <select className="outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 w-72" >
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                  <label>Report Date</label>
                  <input className="outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 w-72" type="date" required placeholder="Enter Age of Patient" />
                </div>

                <button className=" w-28 items-center border-[2px] border-[#102C57] rounded-lg px-5 py-2 hover:text-white hover:bg-[#102C57]" type="submit">Submit</button>
                
              </form>
            </div>
          </div>
        </div>
      }

      {/* hamburger Menu on Mobile View */}
      {
        menuOpen && <div className=" flex justify-end w-full h-full fixed top-0 left-0 bg-[rgba(199,199,199,0.5)]">
        <div className=" rounded-md w-64 h-1/2 bg-white">
          <div>
            <div className=" text-end font-bold p-5" onClick={()=>{setMenuOpen(prev=>!prev)}}>X</div>
          </div>
          <div className=" flex flex-col gap-5 items-center px-4  font-normal text-gray-500">

            <h1 className=" border-[2px] border-[#102C57] px-8 py-1 rounded-md justify-center hover:bg-[#102C57] hover:text-white cursor-pointer font-semibold" onClick={() => {setIsOpen(prev=>!prev); setMenuOpen(prev=>!prev)}}>
              Create New
            </h1>

            <h1 className=" border-[2px] border-[#102C57] px-8 py-1 rounded-md justify-center hover:bg-[#102C57] hover:text-white cursor-pointer font-semibold">
              Report
            </h1>

            <h1 className=" border-[2px] border-[#102C57] px-8 py-1 rounded-md justify-center hover:bg-[#102C57] hover:text-white cursor-pointer font-semibold">
              Add Test
            </h1>

          </div>
          
        </div>
      </div>
      }

      

    </div>
    
  );
}

export default Navbar;
