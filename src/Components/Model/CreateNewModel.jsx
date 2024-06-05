/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// import React from 'react'

import axios from "axios"
import { useEffect, useState } from "react"


const Model = ( {setIsOpen, item} ) => {

  const [testList, setTestList] = useState([])
  const [input, setInput] = useState({"Name":item?item.Name:"", "Mobile":item?item.Mobile:"", "Adderss":item?item.Adderss:"", "Age":item?item.Age:"", "ExaminedBy":item?item.ExaminedBy:"", "ExaminedDate":item?item.ExaminedDate:"", "SelectTest":item?item.SelectTest:"", "ReportDate":item?item.ReportDate:""})

  console.log(item);
  const handleOption = async () => {
    try {
      const response = await axios.get('http://localhost:8080/test/get');
      const data = response.data.testData;
      setTestList(data)
      if (!item) {
        setInput({...input,SelectTest:data[0]._id})
      } else {
        setInput({...input,SelectTest:SelectTest})
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleOption()
  },[])


  const handleInput = (e) => {
    e.preventDefault()
    setInput({...input,[e.target.name]:e.target.value})
  }
  console.log(input);

  const handleSubmit = async() => {
    if (!item) {
      try {
        const response = await axios.post('http://localhost:8080/patient/post',input)
        console.log(response);
        window.location.reload()
      } catch (error) {
        alert("incomplete form")
        console.log(error);
      }
    } else {
      try {
        const response = await axios.put(`http://localhost:8080/patient/${item._id}`,input)
        console.log(response);
        window.location.reload()
      } catch (error) {
        alert("something went wrong in updating patient info.")
        console.log(error);
      }
    }
  }

  return (
    <div className=" flex justify-center fixed top-0 left-0 h-screen w-screen bg-[rgba(154,158,160,0.5)]">
          <div className=" border-[2px] border-[#102C57] rounded-lg w-80 h-[600px] md:w-[800px] md:h-[500px] mt-12 md:mt-24 bg-[#f9efe4]">
            <div className=" flex justify-between px-3 md:p-5">
              <div className=" text-2xl text-[#102C57] font-semibold">{item?"Update Detail":"Create New"}</div>
              <div className=" cursor-pointer text-2xl font-bold" onClick={() => {setIsOpen(prev=>!prev)}}>X</div>
            </div>
            <div className="p-5 ">

              <form className=" flex justify-center flex-wrap gap-1 md:gap-5">
              <div className="">
                  <label htmlFor="">Name</label><br />
                  <input type="text" name="Name" value={input.Name} onChange={(e)=>{handleInput(e)}} className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className="">
                  <label htmlFor="">Mobile No.</label><br />
                  <input type="number" name="Mobile" value={input.Mobile} onChange={(e)=>{handleInput(e)}} className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className="">
                  <label htmlFor="">Adderss</label><br />
                  <input type="text" name="Adderss" value={input.Adderss} onChange={(e)=>{handleInput(e)}} className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className="">
                  <label htmlFor="">Age</label><br />
                  <input type="number" name="Age" value={input.Age} onChange={(e)=>{handleInput(e)}} className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className="">
                  <label htmlFor="">Examined By</label><br />
                  <input type="text" name="ExaminedBy" value={input.ExaminedBy} onChange={(e)=>{handleInput(e)}} className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className="">
                  <label htmlFor="">Examined Date</label><br />
                  <input type="date" name="ExaminedDate" value={input.ExaminedDate} onChange={(e)=>{handleInput(e)}} className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div>

                <div className="">
                  <label htmlFor="">Select Test</label><br />
                  <select name="SelectTest" value={input.SelectTest} onChange={(e)=>{handleInput(e)}} className="outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:h-9 w-72">
                    {
                      testList?.map((item,index) => {
                        return(
                          <option key={index} value={`${item._id}`}>{item.TestName}</option>
                        )
                      })
                    }
                    
                    {/* <option value={'B Test'}>B</option>
                    <option value={'C Test'}>C</option> */}
                  </select>
                </div>

                <div className="">
                  <label htmlFor="">Report Date</label><br />
                  <input type="date" name="ReportDate" value={input.ReportDate} onChange={(e)=>{handleInput(e)}} className=" outline-none border-[2px] rounded-md border-[#102C57] px-4 h-7 md:py-4 w-72" />
                </div> 

                <button onClick={handleSubmit} className=" m-5 w-28 items-center border-[2px] border-[#102C57] rounded-lg px-5 py-2 hover:text-white hover:bg-[#102C57]" type="submit">Submit</button>
                
              </form>
            </div>
          </div>
        </div>
  )
}


export default Model




