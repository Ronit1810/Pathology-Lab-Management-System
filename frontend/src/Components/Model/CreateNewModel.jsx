// import React from 'react'

// eslint-disable-next-line react/prop-types
const Model = ( {setIsOpen} ) => {
  return (
    <div className=" flex justify-center fixed top-0 left-0 h-screen w-screen bg-[rgba(154,158,160,0.5)]">
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
  )
}


export default Model




