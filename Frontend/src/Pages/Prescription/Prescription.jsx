// import React from 'react'

import axios from 'axios'
import logo from '../../assets/Logo.png'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Prescription = () => {

    const{id} = useParams()
    const[patientDetail, setPatientDetail] = useState(null)

    const loadPatient = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/patient/get/${id}`)
            console.log(response);
            setPatientDetail(response.data.data)
            console.log(patientDetail);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadPatient();
    },[id])

    // download report functionality
    const downloadPDF = () => {
        const input = document.getElementById("PDFPage")

        // html2canvas return promise
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF('p', 'mm', 'a4') //jsPDF p(portrait)
            const imgWidth = 210; // A4 width in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width; 
            const pageHeight = pdf.internal.pageSize.getHeight();
            let heightLeft = imgHeight;

            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            pdf.save(`${patientDetail?.Name}.pdf`)
        })
    }

  return (
    <div className=" min-h-[70vh] md:min-h-[75vh] flex flex-col items-center gap-5">
        <div id='PDFPage' className=" pb-10 px-5 mt-10 rounded-lg w-full  bg-[rgba(222,221,219,0.5)] ">

            {/* header of prescription logo and detail */}
            <div className='md:px-8 my-4 flex items-center justify-between'>
                <div className=' md:px-5'>
                    <img className=" w-14 h-8 md:w-16 md:h-12" src={logo} alt="company Logo" />
                </div>
                <div className=' md:px-5'>
                    <h1 className=' text-lg md:text-xl font-semibold text-[#102C57] '>Company Name</h1>
                    <p className=' text-xs font-normal text-gray-500'>Company Address</p>
                    <p className=' text-xs font-normal text-gray-500'>Company Contact</p>
                </div>
            </div>


            {/* patient detail */}
            <div className=' flex justify-between flex-col md:flex-row md:px-16 pb-8 border-b-[1px] border-black'>
                <div className=' flex flex-col '>
                    <h1><span className=' mr-2 text-base font-medium text-[#102C57]'>Patient Name :</span>{patientDetail?.Name}</h1>
                    <h1><span className=' mr-2 text-base font-medium text-[#102C57]'>Patient Age :</span>{patientDetail?.Age}</h1>
                    <h1><span className=' mr-2 text-base font-medium text-[#102C57]'>Patient Address :</span>{patientDetail?.Adderss}</h1>
                </div>
                <div className=' flex flex-col justify-between'>
                    <h1><span className=' mr-2 text-base font-medium text-[#102C57]'>Examined by :</span>{patientDetail?.ExaminedBy}</h1>
                    <h1><span className=' mr-2 text-base font-medium text-[#102C57]'>Patient Mobile no. :</span>{patientDetail?.Mobile}</h1>
                    <h1><span className=' mr-2 text-base font-medium text-[#102C57]'>Examined Date :</span>{patientDetail?.ExaminedDate}</h1>
                </div>               
            </div>


            {/* Test Detail */}
            {
                patientDetail && patientDetail.result?.map((item,index) => {
                    return(
                        <div key={index}>
                            <table className=' w-full text-center my-5'>
                                <thead className="">
                                    <tr>
                                        <th className=' text-sm'>Test Name</th>
                                        <th className=' text-sm'>Normal Range</th>
                                        <th className=' text-sm'>Unit</th>
                                        <th className=' text-sm'>Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className=' pb-2 md:pb-4 text-[#102C57] text-xs md:text-base '>{item?.name}</td>
                                        <td className=' pb-2 md:pb-4 text-xs md:text-base'>{item?.range}</td>
                                        <td className=' pb-2 md:pb-4 text-xs md:text-base'>{item?.unit}</td>
                                        <td className=' pb-2 md:pb-4 text-xs md:text-base'>{item?.result}</td>
                                    </tr>                        
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }
            


            {/* Bottom Signature */}
            <div className=' flex justify-between'>
                <div>
                    <h1 className=' text-sm font-medium text-gray-500 '>Examined By</h1>
                    <p className=' text-xs font-normal text-[#102c57e5]'>{patientDetail?.ExaminedBy}</p>
                </div>
                <div>
                    <h1 className=' text-sm font-medium text-gray-500 '>Report Date</h1>
                    <p className=' text-xs font-normal text-[#102c57e5]'>{patientDetail?.ReportDate}</p>
                </div>
            </div>

        </div>

        {/* Download Button */}
        <div onClick={downloadPDF} className=' cursor-pointer flex rounded-3xl bg-[#102C57] text-white hover:bg-white hover:text-black justify-center w-40 px-4 py-2 border-[2px] border-black'>Download</div>
    </div>
  )
}

export default Prescription