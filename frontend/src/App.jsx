
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Header/Navbar'
import HomePage from './Pages/Home/HomePage'
import TestDetail from './Pages/Home/TestDetail'

function App() {

  return (
    <div className=' bg-[#f8f5f2e7] min-h-screen '>
      <Navbar />
      <div className=' px-7 md:px-24'>
        <HomePage />
        <TestDetail />
      </div>
      <Footer/>
    </div>
  )
}

export default App
