// import React from 'react'

const Report = () => {
  return (
    <div className=" min-h-[70vh] md:min-h-[75vh] flex justify-center">
        <div className=" mt-10 p-5 rounded-lg w-full md:w-3/4 bg-[rgba(222,221,219,0.5)] ">


            {/* name of patient and doctor */}
            <div className=" flex flex-col md:flex-row justify-between md:px-12 py-4">
                <div className=" text-base font-medium text-[#102C57]">Name : Ronit Patel</div>
                <div className=" text-base font-medium text-[#102C57]">Examined By : Dr.R.B.Patel</div>
            </div>


            {/* name of the test selected while creating new */}
            <div className=" md:px-12 md:py-4">
                <h1 className=" text-2xl font-bold text-[#102C57]">Blood Test</h1>
            </div>


            {/* main form  */}
            <div className=" border-[2px] border-[#102c5767] flex flex-col mt-8 py-4 px-4 rounded-md md:flex-row md:px-8 justify-between">
                <div>
                    <div>Test name</div>
                    <input  className=" w-full outline-none rounded-md border-[2px] border-[#102C57] px-2 py-[2px]" type="test" />
                </div>
                <div>
                    <div>Normal Range</div>
                    <input className=" w-full outline-none rounded-md border-[2px] border-[#102C57] px-2 py-[2px]" type="test" />
                </div>
                <div>
                    <div>Unit</div>
                    <input className=" w-full outline-none rounded-md border-[2px] border-[#102C57] px-2 py-[2px]" type="test" />
                </div>
                <div>
                    <div>Result</div>
                    <input className=" w-full outline-none rounded-md border-[2px] border-[#102C57] px-2 py-[2px]" type="test" />
                </div>
            </div>


            {/* Buttons */}
            <div className=" flex w-11/12 md:w-1/3 md:px-8 justify-between">
                <div className=" border-[2px] border-[#102C57] px-4 py-1 rounded-2xl mt-4 cursor-pointer hover:bg-[#102C57] hover:text-white">Add</div>
                <div className=" border-[2px] border-[#102C57] px-4 py-1 rounded-2xl mt-4 cursor-pointer hover:bg-[#102C57] hover:text-white">Remove</div>
                <div className=" border-[2px] border-[#102C57] px-4 py-1 rounded-2xl mt-4 cursor-pointer hover:bg-[#102C57] hover:text-white">Report</div>
            </div>
            
        </div>
    </div>
  )
}

export default Report