import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Contactpage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import "./styles/Pages.css";
import "./App.css";

import AdmissionPage from "./pages/AdmissionPage";
import Header from "./components/Header/Header";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";


const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return(
      <>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Ankita Sagar Kadam"
          studentPhotoUrl="./ankitapic.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Router>
        <div className="main-layout">
          <Header/>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/home" element={<HomePage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/course" element={<CoursesPage/>}/>
              <Route path="/contact" element={<Contactpage/>}/>
              <Route path="/admissions" element={<AdmissionPage/>}/>
            </Routes>
          </div>
          <Footer/>
          <ChatbotComponent/>
      </div>
      </Router>
      </>
  )
}

export default App;
//Ankita sagar kadam BCA III