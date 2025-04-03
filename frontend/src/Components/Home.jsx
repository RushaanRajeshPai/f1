import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={()=>{navigate("/predict")}} className='bg-blue-500'>Predict</button>
    </div>
  )
}

export default Home
