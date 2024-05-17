// import React from 'react'

// eslint-disable-next-line react/prop-types
const HamburgerModel = ({ setIsOpen, setMenuOpen }) => {
  return (
    <div className=" flex justify-end w-full h-full fixed top-0 left-0 bg-[rgba(199,199,199,0.5)]">
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
  )
}

export default HamburgerModel