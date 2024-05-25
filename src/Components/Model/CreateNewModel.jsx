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
            <div className="p-5 ">

              <form className=" flex justify-center flex-wrap gap-1 md:gap-5">
              <div className="">
                  <label htmlFor="">Name</label><br />
                  <input type="text" className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className="">
                  <label htmlFor="">Mobile No.</label><br />
                  <input type="number" className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className="">
                  <label htmlFor="">Adderss</label><br />
                  <input type="text" className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className="">
                  <label htmlFor="">Age</label><br />
                  <input type="number" className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className="">
                  <label htmlFor="">Examined By</label><br />
                  <input type="text" className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className="">
                  <label htmlFor="">Examined Date</label><br />
                  <input type="date" className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className="">
                  <label htmlFor="">Select Test</label><br />
                  <select className="outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:h-9 w-72">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                </div>

                <div className="">
                  <label htmlFor="">Report Date</label><br />
                  <input type="date" className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div> 

                <button className=" m-5 w-28 items-center border-[2px] border-[#102C57] rounded-lg px-5 py-2 hover:text-white hover:bg-[#102C57]" type="submit">Submit</button>
                
              </form>
            </div>
          </div>
        </div>
  )
}


export default Model




