// import React from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import SummarizeIcon from '@mui/icons-material/Summarize';

import { useEffect, useState } from "react"
import Model from '../../Components/Model/CreateNewModel';
import { Link } from 'react-router-dom';
import axios from 'axios';

function StatusPage() {



  const[activeStatus, setActiveStatus] = useState('pending')
  const[data, setData] = useState([])
  const[isClick, setIsClick] = useState(false)
  const[clickedPatient, setClickedPatent] = useState(null)

  const updateIconClick = (item) => {
    return(
      setIsClick(true),
      setClickedPatent(item)
    )
  }

  const pendingData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/patient/status/${activeStatus}`)
      // console.log(response);
      setData(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
      pendingData()
  },[activeStatus])

  const DeletePatient = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/patient/${id}`)
      console.log(response);
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='min-h-[70vh] md:min-h-[75vh]'>
      <div className=" flex flex-col gap-5 items-center justify-center">

      {/* status (Pending or Completed) */}
        <div className=" flex flex-col md:flex-row w-[500px] items-center md:items-start gap-2 md:gap-0 py-3">
          <div className={` w-3/6 h-7 border-[2px] border-black flex items-center justify-center py-4 rounded-full cursor-pointer ${activeStatus === 'pending'?"bg-[#102C57] text-white":null}`} onClick={()=>{setActiveStatus('pending')}}>Pending</div>
          <div className={` w-3/6 h-7 border-[2px] border-black flex items-center justify-center py-4 rounded-full cursor-pointer ${activeStatus === 'completed'?"bg-[#102C57] text-white":null}`} onClick={()=>{setActiveStatus('completed')}}>Completed</div>
        </div>

      {/* List of Pending or Completed Test */}
        <div className=" items-center w-full flex gap-6 flex-col justify-center">
          {
            data && data.map((item, index)=>{
              return(
                <div key={index} className=" p-2 md:px-16 md:py-2 flex justify-evenly h-fit w-full rounded-lg items-center md:w-[90%] border-[2px] border-black">
                  <div className=' text-[#102C57]'>{item.Name}</div>
                  <div className=' flex flex-col items-center justify-center'>
                    <div>{item.ExaminedBy}</div>
                    <div className=' text-gray-500 text-xs'>{item.ExaminedDate}</div>
                  </div>
                  <div className=' flex items-center justify-center gap-2 md:gap-4 ' >
                    {activeStatus === 'pending'?<EditNoteIcon onClick={()=>{updateIconClick(item)}} className=' cursor-pointer bg-[#102C57] text-white rounded-md' />:null}
                    {activeStatus === 'pending'?<DeleteIcon  onClick={()=>{DeletePatient(item._id)}}  className=' cursor-pointer bg-[#102C57] text-white rounded-md' />:null}
                    <Link to={activeStatus === 'completed'?`/prescription/${item._id}`:`/report/${item._id}`} className=' cursor-pointer bg-[#102C57] flex items-center text-white rounded-md'><SummarizeIcon  /></Link>
                    
                  </div>
                </div>
              )
            })
          }

        </div>
        {
          isClick && <Model item={clickedPatient} setIsOpen={setIsClick} />
        }
      </div>
    </div>
  )
}

export default StatusPage