import { useEffect, useState } from 'react'
import data from './data.json'
function TestDetail() {
  // console.log(data);
  const[testList, setTestList] = useState([])
  const[activeTest, setActiveTest] = useState(0);
  const[selectedDetail, setSelectedDetail] = useState(null);

  useEffect(() => {
    setTestList(data.data)
    setSelectedDetail(data.data[0])
  },[])

  function handleClick(index) {
    setActiveTest(index)
    setSelectedDetail(data.data[index])
  }
  console.log(selectedDetail); //show single test detail
  // console.log(activeTest); // show current selected index
  // console.log(testList); // show all the test available
  return (
    <div >
        <h1 className=" pb-5 md:pb-10 text-2xl md:text-5xl font-bold">Available Test</h1>
        <div className=" overflow-auto h-52 flex-wrap items-center flex justify-center gap-8">
        {
          testList?.map((item,index) => {
            return(
              <h1 key={index} onClick={()=>{handleClick(index)}} className={`px-5 py-2 rounded-lg  cursor-pointer border-2 bg-[#102C57] border-[#102C57] ${activeTest === index ? 'bg-white text-[#102C57]' : 'bg-blur-[#102C57] text-white'}`}>{item.name}</h1>
            );
          })
        }
           
        </div>

        {/* div for detail and requirement of test */}
        
        <div className=" md:pt-10">
          <h4 className=" border-b-2 border-[#102C57] text-lg font-semibold"><span className=" text-[#102C57]">{selectedDetail?.name}</span> Detail :-</h4>
          <div className=" flex flex-col md:gap-16">
            <div>
              <p>{selectedDetail?.description}</p>
            </div>
            <div className=" border-[2px] p-5 items-center rounded-lg flex flex-col gap-5 md:flex-row justify-between">
              <div>
              {
                selectedDetail?.requirements?.map((item,index) => {
                  return(
                    <ul key={index}>
                      <li className=" font-medium">{item.key} : <span className=" text-[#102C57]">{item.value}</span></li>
                    </ul>

                  )
                })
              }
              </div>
              <div className=' w-2/5 flex justify-center'>
                <img  src={selectedDetail?.imgLink} alt="img"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TestDetail