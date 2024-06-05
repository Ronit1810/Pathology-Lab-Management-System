// import React from 'react'

import axios from "axios"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
const AddTestModel = ({setTestMenu}) => {

  const[testInput, setTestInput] = useState({"TestName":"", "TestDescription":"", "TestImageLink":"", "Price":"", "Fasting":"", "NormalRange":"", "AbnormalRange":"", "Date":""})

  const handleTestInput = (e) => {
    e.preventDefault()
    setTestInput({...testInput,[e.target.name]:e.target.value})
  }
  // console.log(testInput);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/test/post',testInput)
      console.log(response);
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=" flex justify-center items-center w-full h-full fixed top-0 left-0 bg-[rgba(168,169,168,0.5)]">
        <div className=" bg-[#f9efe4] w-[340px] md:w-[700px] h-[580px] rounded-md">
        
          <div className="flex justify-between px-3 md:p-5">
            <div className="text-2xl text-[#102C57] font-semibold">
              Add Test
            </div>
            <div className="cursor-pointer text-2xl font-bold" onClick={()=> {setTestMenu(prev => !prev)}}>X</div>
          </div>


          <div className="p-5 ">
              <form action="" className=" flex justify-center flex-wrap gap-1 md:gap-5">

                <div className=" md:p-3">
                  <label htmlFor="">Test Name</label><br />
                  <input type="text" name="TestName" value={testInput.TestName} onChange={(e)=>{handleTestInput(e)}} className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className=" md:p-3">
                  <label htmlFor="">Test Description</label><br />
                  <input type="text" name="TestDescription" value={testInput.TestDescription} onChange={(e)=>{handleTestInput(e)}} className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className=" md:p-3">
                  <label htmlFor="">Test Image Link</label><br />
                  <input type="text" name="TestImageLink" value={testInput.TestImageLink} onChange={(e)=>{handleTestInput(e)}} className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className=" md:p-3">
                  <label htmlFor="">Price</label><br />
                  <input type="text" name="Price" value={testInput.Price} onChange={(e)=>{handleTestInput(e)}} className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className=" md:p-3">
                  <label htmlFor="">Fasting</label><br />
                  <input type="text" name="Fasting" value={testInput.Fasting} onChange={(e)=>{handleTestInput(e)}} className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className=" md:p-3">
                  <label htmlFor="">Normal Range</label><br />
                  <input type="text" name="NormalRange" value={testInput.NormalRange} onChange={(e)=>{handleTestInput(e)}} className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className=" md:p-3">
                  <label htmlFor="">Abnormal Range</label><br />
                  <input type="text" name="AbnormalRange" value={testInput.AbnormalRange} onChange={(e)=>{handleTestInput(e)}} className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className=" md:p-3">
                  <label htmlFor="">Date</label><br />
                  <input type="date" name="Date" value={testInput.Date} onChange={(e)=>{handleTestInput(e)}} className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <button onClick={handleSubmit} className=" mt-3 md:mt-2 w-28 items-center border-[2px] border-[#102C57] rounded-lg px-5 py-2 hover:text-white hover:bg-[#102C57]" type="submit">Submit</button>
                
              </form>
            </div>
        </div>
      </div>
  )
}

export default AddTestModel