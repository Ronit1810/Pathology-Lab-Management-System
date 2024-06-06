import { useEffect, useState } from 'react'
// import data from './data.json'
import axios from 'axios';
function TestDetail() {
  // console.log(data);
  const[testList, setTestList] = useState([])
  const[activeTest, setActiveTest] = useState(0);
  const[selectedDetail, setSelectedDetail] = useState(null);
  
  const getTestDetail = async () => {
    try {
      const response = await axios.get('https://pathology-lab-management-system-backend.vercel.app/test/get');
      const data = response.data.testData;
      setTestList(data);
      setSelectedDetail(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTestDetail();
  }, []);

  useEffect(() => {
    if (testList.length > 0) {
      console.log(testList);
      
      console.log(selectedDetail);
    }
  }, [testList, selectedDetail]);


  function handleClick(index) {
    setActiveTest(index)
    setSelectedDetail(testList[index])
  }
  // console.log(selectedDetail); //show single test detail
  // console.log(activeTest); // show current selected index
  // console.log(testList); // show all the test available
  return (
    <div >
        <h1 className=" pb-5 md:pb-10 text-2xl md:text-5xl font-bold">Available Test</h1>
        <div className=" overflow-visible h-52 flex-wrap items-center flex justify-center gap-8">
        {
          testList?.map((item,index) => {
            return(
              <h1 key={index} onClick={()=>{handleClick(index)}} className={`px-5 py-2 rounded-lg  cursor-pointer border-2 bg-[#102C57] border-[#102C57] ${activeTest === index ? 'bg-white text-[#102C57]' : 'bg-blur-[#102C57] text-white'}`}>{item.TestName}</h1>
            );
          })
        }
           
        </div>

        {/* div for detail and requirement of test */}
        
        <div className=" md:pt-10">
          <h4 className=" border-b-2 border-[#102C57] text-lg font-semibold"><span className=" text-[#102C57]">{selectedDetail?.TestName}</span> Detail :-</h4>
          <div className=" flex flex-col md:gap-16">
            <div>
              <p>{selectedDetail?.TestDescription}</p>
            </div>
            <div className=" border-[2px] p-5 items-center rounded-lg flex flex-col gap-5 md:flex-row justify-between">
              <div>

              <ul>
                <li className=" font-medium">Fasting : <span className=" text-[#102C57]">{selectedDetail?.Fasting}</span></li>
                <li className=" font-medium">Normal Range : <span className=" text-[#102C57]">{selectedDetail?.NormalRange}</span></li>
                <li className=" font-medium">Abnormal Range : <span className=" text-[#102C57]">{selectedDetail?.AbnormalRange}</span></li>
                <li className=" font-medium">Price : <span className=" text-[#102C57]">{selectedDetail?.Price}</span></li>
              </ul>
              </div>
              <div className=' w-2/5 flex justify-center'>
                <img  src={selectedDetail?.TestImageLink} alt="img"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TestDetail