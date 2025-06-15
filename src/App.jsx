import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPages from "./pages/AboutPage"

const App = () => {
   return (
     <>
      <Router>
        <Routes>
           <Route path="/" element={<HomePage/>}/>
           <Route path="/home" element={<HomePage/>}/>
           <Route path="/about" element={<AboutPages/>}/> 
        </Routes>
      </Router>
     </>
   )
  }
export default App