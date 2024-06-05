// import React from 'react'

import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Report = () => {

    // useParams() is use to fetch/take the data from url(current)
    const {id} = useParams()

    const[inputField, setInputField] = useState([{"id":0, "name":"", "range":"", "unit":"", "result":""}])
    const[patientData, setPatientData] = useState(null)
    const[testData, setTestData] = useState(null)


    const fetchLoadData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/patient/${id}/testdetail`)
            console.log(response);
            setPatientData(response.data.patient)
            setTestData(response.data.test)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchLoadData()
    },[])
    console.log(testData);

    /* below function store the input data in 'inputField' */
    const onChnageInput = (e,index) => {
        e.preventDefault()
        const updateRow = inputField.map((row) => {
            if (row.id == index) {
                return{...row,[e.target.name]:e.target.value}
            }
            return row
        })
        setInputField(updateRow)
    }
    // console.log(inputField);
    


    // Add Button functionality
    const AddNewRow = () => {
        const addRow = {
            id:inputField.length, "name":"", "range":"", "unit":"", "result":""
        }
        setInputField([...inputField,addRow])
    }
    console.log(inputField);

    

    // Remove button functionality (use .slice method)
    const RemoveRow = () => {
        if (inputField.length > 1) {
            setInputField(inputField.slice(0,-1))
        }
    }


    const handleReport = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/patient/${patientData._id}`,{
                ...patientData,result:inputField,status:'completed'
            })
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    

  return (
    <div className=" min-h-[70vh] md:min-h-[75vh] flex justify-center">
        <div className=" mt-10 p-5 rounded-lg w-full lg:w-3/4 bg-[rgba(222,221,219,0.5)] ">


            {/* name of patient and doctor */}
            <div className=" flex flex-col md:flex-row justify-between md:px-12 py-4">
                <div className=" text-base font-medium text-[#102C57]">Name : {patientData?.Name}</div>
                <div className=" text-base font-medium text-[#102C57]">Examined By : {patientData?.ExaminedBy}</div>
            </div>


            {/* name of the test selected while creating new */}
            <div className=" md:px-12 md:py-4">
                <h1 className=" text-2xl font-bold text-[#102C57]">{testData?.TestName}</h1>
            </div>


            {/* main form  */}
            {
                inputField.map((item, index)=>{
                    return(
                        <div key={index} className=" border-[2px] border-[#102c5767] flex flex-col mt-8 py-4 px-4 rounded-md md:flex-row lg:px-8 justify-between">
                            <div>
                                <div>Test name</div>
                                <input value={item.name} name="name" onChange={(e) => {onChnageInput(e,item.id)}}  className=" w-full outline-none rounded-md border-[2px] border-[#102C57] px-2 py-[2px]" type="test" />
                            </div>
                            <div>
                                <div>Normal Range</div>
                                <input value={item.range} name="range" onChange={(e) => {onChnageInput(e,item.id)}} className=" w-full outline-none rounded-md border-[2px] border-[#102C57] px-2 py-[2px]" type="test" />
                            </div>
                            <div>
                                <div>Unit</div>
                                <input value={item.unit} name="unit" onChange={(e) => {onChnageInput(e,item.id)}} className=" w-full outline-none rounded-md border-[2px] border-[#102C57] px-2 py-[2px]" type="test" />
                            </div>
                            <div>
                                <div>Result</div>
                                <input value={item.result} name="result" onChange={(e) => {onChnageInput(e,item.id)}} className=" w-full outline-none rounded-md border-[2px] border-[#102C57] px-2 py-[2px]" type="test" />
                            </div>
                        </div>
                    )
                })
            }


            {/* Buttons */}
            <div className=" flex md:px-8 gap-5">
                <div onClick={AddNewRow} className=" border-[2px] border-[#102C57] px-4 py-1 rounded-2xl mt-4 cursor-pointer hover:bg-[#102C57] hover:text-white">Add</div>
                
                {/* conditionally rendering the div to remove 'remove button' at initial level */}
                {
                    inputField.length > 1 ? <div onClick={RemoveRow} className=" border-[2px] border-[#102C57] px-4 py-1 rounded-2xl mt-4 cursor-pointer hover:bg-[#102C57] hover:text-white">Remove</div> : null
                }

                <Link onClick={handleReport} to={`/prescription/${id}`} className=" border-[2px] border-[#102C57] px-4 py-1 rounded-2xl mt-4 cursor-pointer hover:bg-[#102C57] hover:text-white">Report</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Report