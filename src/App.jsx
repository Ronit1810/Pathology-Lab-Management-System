import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import HomePage from "./Pages/Home/HomePage";
// import TestDetail from './Pages/Home/TestDetail'
import { Routes, Route } from "react-router-dom";
import StatusPage from "./Pages/Status/StatusPage";
import Report from "./Pages/Report/Report";
import Prescription from "./Pages/Prescription/Prescription";

function App() {
  return (
    <div className=" bg-[#f8f5f2e7] min-h-screen ">
      <Navbar />

      <div className=" px-7 md:px-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/report/:id" element={<Report />} />
          <Route path="/prescription/:id" element={<Prescription />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
