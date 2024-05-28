// import React from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import SummarizeIcon from '@mui/icons-material/Summarize';

import { useEffect, useState } from "react"
import Model from '../../Components/Model/CreateNewModel';
import { Link } from 'react-router-dom';

function StatusPage() {

  

  const pendingData = [
    {
      "id":"1",
      "name":"Ronit",
      "drname":"Dr.R.B.Patel",
      "predate":"09-06-2001"
    },
    {
      "id":"2",
      "name":"Devgun",
      "drname":"Dr.Yadav",
      "predate":"09-10-2011"
    }
  ]
  const completeData = [
    {
      "id":"1",
      "name":"Rahul",
      "drname":"Dr.Patel",
      "predate":"25-06-2001"
    },
    {
      "id":"2",
      "name":"Devgun",
      "drname":"Dr.dev",
      "predate":"09-10-2025"
    }
  ]

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


  useEffect(()=>{
    if (activeStatus === 'pending') {
      setData(pendingData)
      // console.log(data);
    } else {
      setData(completeData)
      // console.log(data);
    }
  },[activeStatus])
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
                  <div className=' text-[#102C57]'>{item.name}</div>
                  <div className=' flex flex-col items-center justify-center'>
                    <div>{item.drname}</div>
                    <div className=' text-gray-500 text-xs'>{item.predate}</div>
                  </div>
                  <div className=' flex items-center justify-center gap-2 md:gap-4 ' >
                    {activeStatus === 'pending'?<EditNoteIcon onClick={()=>{updateIconClick(item)}} className=' cursor-pointer bg-[#102C57] text-white rounded-md' />:null}
                    {activeStatus === 'pending'?<DeleteIcon className=' cursor-pointer bg-[#102C57] text-white rounded-md' />:null}
                    <Link to={`/report/${item.id}`} className=' cursor-pointer bg-[#102C57] flex items-center text-white rounded-md'><SummarizeIcon  /></Link>
                    
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