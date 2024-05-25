// import React from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import SummarizeIcon from '@mui/icons-material/Summarize';

import { useState } from "react"

function StatusPage() {
  const[activeStatus, setActiveStatus] = useState('pending')
  return (
    <div className='min-h-[70vh]'>
      <div className=" flex flex-col gap-5 items-center justify-center">

      {/* status (Pending or Completed) */}
        <div className=" flex flex-col md:flex-row w-[500px] items-center md:items-start gap-2 md:gap-0 py-3">
          <div className={` w-3/6 h-7 border-[2px] border-black flex items-center justify-center py-4 rounded-full cursor-pointer ${activeStatus === 'pending'?"bg-[#102C57] text-white":null}`} onClick={()=>{setActiveStatus('pending')}}>Pending</div>
          <div className={` w-3/6 h-7 border-[2px] border-black flex items-center justify-center py-4 rounded-full cursor-pointer ${activeStatus === 'completed'?"bg-[#102C57] text-white":null}`} onClick={()=>{setActiveStatus('completed')}}>Completed</div>
        </div>

      {/* List of Pending or Completed Test */}
        <div className=" items-center w-full flex gap-6 flex-col justify-center">
          <div className=" p-2 md:px-16 md:py-2 flex justify-between h-fit w-full rounded-lg items-center md:w-[90%] border-[2px] border-black">
            <div className=' text-[#102C57]'>Mr.Ronit Patel</div>
            <div>
              <div>Dr.R.B.Patel</div>
              <div className=' text-gray-500 text-xs'>08-05-2024</div>
            </div>
            <div className=' flex items-center justify-center gap-2 md:gap-4 ' >
              <EditNoteIcon className=' cursor-pointer bg-[#102C57] text-white rounded-md' />
              <DeleteIcon className=' cursor-pointer bg-[#102C57] text-white rounded-md' />
              <SummarizeIcon className=' cursor-pointer bg-[#102C57] text-white rounded-md' />
            </div>
          </div>

          <div className=" p-2 md:px-16 md:py-2 flex justify-between h-fit w-full rounded-lg items-center md:w-[90%] border-[2px] border-black">
            <div className=' text-[#102C57]'>Mr.Ronit Patel</div>
            <div>
              <div>Dr.R.B.Patel</div>
              <div className=' text-gray-500 text-xs'>08-05-2024</div>
            </div>
            <div className=' flex items-center justify-center gap-2 md:gap-4 '>
              <EditNoteIcon className=' cursor-pointer bg-[#102C57] text-white rounded-md' />
              <DeleteIcon className=' cursor-pointer bg-[#102C57] text-white rounded-md' />
              <SummarizeIcon className=' cursor-pointer bg-[#102C57] text-white rounded-md' />
            </div>
          </div>
          
          <div className=" p-2 md:px-16 md:py-2 flex justify-between h-fit w-full rounded-lg items-center md:w-[90%] border-[2px] border-black">
            <div className=' text-[#102C57]'>Mr.Ronit Patel</div>
            <div>
              <div>Dr.R.B.Patel</div>
              <div className=' text-gray-500 text-xs'>08-05-2024</div>
            </div>
            <div className=' flex items-center justify-center gap-2 md:gap-4 '>
              <EditNoteIcon className=' cursor-pointer bg-[#102C57] text-white rounded-md' />
              <DeleteIcon className=' cursor-pointer bg-[#102C57] text-white rounded-md' />
              <SummarizeIcon className=' cursor-pointer bg-[#102C57] text-white rounded-md' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatusPage