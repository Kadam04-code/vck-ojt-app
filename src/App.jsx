import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPages from "./pages/AboutPage"
import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponents"
import Footer from "./components/Header/Footer/Footer"

const App = () => {
   return (
     <>
      <Router>
        <Routes>
           <Route path="/" element={<HomePage/>}/>
           <Route path="/home" element={<HomePage/>}/>
           <Route path="/about" element={<AboutPages/>}/> 
        </Routes>
        <div>
          <ChatbotComponent/>
          <Footer/>
        </div>
      </Router>
     </>
   )
  }
export default App;
