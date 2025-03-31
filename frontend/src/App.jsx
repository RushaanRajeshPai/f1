import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from './Components/Navbar.jsx'
import Login from './Components/RegistrationComponent/Login.jsx'
import SignUp from './Components/RegistrationComponent/SignUp.jsx'

function App() {

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
