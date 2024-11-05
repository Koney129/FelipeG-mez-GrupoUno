import { useState } from "react"
import { LuMenuSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
const Header = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () =>{
        setNav(!nav);
        if (!nav){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    }
    
    return(
        <div className="relative" >
            <div className="absolute w-full flex justify-between p-4 items-center z-20">
                <h1 className="text-yellow-200 font-bold text-2x1 transition-transform duration-300 hover:scale-105 cursor-pointer">
                    Vangu<span className="text-red-500">ardia</span>

                </h1>
                <LuMenuSquare
                className="text-yellow-200 cursor-pointer transition-transform duration-300 hover:scale-105"
                size={30}
                onClick={toggleNav}/>
            </div>
            <div
            className={`${
                nav
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-full'
            } transition-all duration-300 ease-in-out fixed inset-0 overflow-hidden z-10 bg-black bg-opacity-70`}
            >
            <ul className="flex felx-col w-full items-center justify-center pt-20">
                <Link to="/" className="font-bold text-3x1 p-4 cursor-pointer text-white hover:text-orange-500 transition-transform duration-300 hover-scale-105">Inicio</Link>
                    
                <Link to="/Acercade" className="font-bold text-3x1 p-4 cursor-pointer text-white hover:text-orange-500 transition-transform duration-300 hover-scale-105">acerca de</Link>
                    
                
                <Link to="/Info" className="font-bold text-3x1 p-4 cursor-pointer text-white hover:text-orange-500 transition-transform duration-300 hover-scale-105">Info</Link>
                
                <Link to="/Contactos" className="font-bold text-3x1 p-4 cursor-pointer text-white hover:text-orange-500 transition-transform duration-300 hover-scale-105">Contactos</Link>

            </ul>    
            </div>
        </div>
    )
}

export default Header