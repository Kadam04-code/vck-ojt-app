import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Contactpage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import "./styles/pages.css";
import "./App.css";

import AdmissionPage from "./pages/AdmissionPage";
import Header from "./components/Header/Header";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import Footer from "./components/Footer/Footer";

const App = () => {
    return(
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
  )
}

export default App;
//Ankita sagar kadam BCA III