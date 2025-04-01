import React from 'react'
import f1logo from '../Assets/f1logo.svg'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()
    const handleRegister = () => {
        navigate('/login')
    }

    return (
        <div>
            <nav className="bg-black p-4 shadow-md">
                <div className="container mx-auto flex items-center justify-between">
                    <a href="/" className="text-lg font-bold text-gray-800"><img className='h-9' src={f1logo} alt="" /></a>
                    <button className="lg:hidden p-2 text-gray-600 focus:outline-none" id="menu-button">
                        &#9776;
                    </button>

                    <div className="hidden lg:flex space-x-7" id="navbar-menu">
                        <Link to="#" className="text-white text-xl mt-2 font-exo hover:text-red-600 hover:underline hover:underline-offset-4">Results</Link>

                        <Link to="/standings" className="text-white text-xl mt-2 font-exo hover:text-red-600 hover:underline hover:underline-offset-4">
                            Standings</Link>

                        <Link to="#" className="text-white text-xl mt-2 font-exo hover:text-red-600 hover:underline hover:underline-offset-4">Venues</Link>

                        <Link to="#" className="text-white text-xl mt-2 font-exo hover:text-red-600 hover:underline hover:underline-offset-4">Pit Stop Circus</Link>
                        
                        <button onClick={handleRegister} className="font-exo text-lg font-bold uppercase px-6 h-12 bg-black text-red-500 border-2 border-red-500 rounded-full shadow-md hover:bg-red-500 hover:text-black transition-all duration-300 hover:shadow-red-500/50">
                            Register
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar