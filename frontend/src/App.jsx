import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import Login from './Components/RegistrationComponent/Login.jsx'
import SignUp from './Components/RegistrationComponent/SignUp.jsx'
import Standings from './Components/Standings.jsx'
import Predict from "./Components/Predict.jsx";
import Result from "./Components/ResultComponent/Result.jsx";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/result' element={<Result />} />
          <Route path="/predict" element={<Predict/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/standings" element={<Standings />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
