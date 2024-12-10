import { useState } from "react";
import { LuMenuSquare } from "react-icons/lu";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi"; 
import { Link } from "react-router-dom";
import useStore from "../../Vanguard/StoreVan"; 

const Header = () => {
    const [nav, setNav] = useState(false);
    const cart = useStore((state) => state.cart); 

    const toggleNav = () => {
        setNav(!nav);
        if (!nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    }

    return (
        <div className="relative z-50">
            <div className="absolute w-full flex justify-between p-4 items-center z-50 bg-transparent">
                <h1 className="text-yellow-200 font-bold text-2xl transition-transform duration-300 hover:scale-105 cursor-pointer">
                    Vangu<span className="text-red-500">ardia</span>
                </h1>
                <div className="flex items-center">
                    <Link to="/cart" className="relative mr-4">
                        <PiShoppingCartSimpleDuotone className="text-yellow-200 cursor-pointer transition-transform duration-300 hover:scale-105" size={30} />
                        {cart.length > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                                {cart.length}
                            </span>
                        )}
                    </Link>
                    <LuMenuSquare
                        className="text-yellow-200 cursor-pointer transition-transform duration-300 hover:scale-105"
                        size={30}
                        onClick={toggleNav}
                    />
                </div>
            </div>
            <div
                className={`${
                    nav
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-full'
                } transition-all duration-300 ease-in-out fixed inset-0 overflow-hidden z-40 bg-black bg-opacity-70`}
            >
                <ul className="flex flex-row w-full items-center justify-center pt-20 space-x-4">
                    <Link to="/" className="font-bold text-xl p-4 cursor-pointer text-white hover:text-orange-500 transition-transform duration-300 hover:scale-105">Inicio</Link>
                    <Link to="/Producto" className="font-bold text-xl p-4 cursor-pointer text-white hover:text-orange-500 transition-transform duration-300 hover:scale-105">ProductoVan</Link>
                    <Link to="/Acercade" className="font-bold text-xl p-4 cursor-pointer text-white hover:text-orange-500 transition-transform duration-300 hover:scale-105">Acerca de</Link>
                    <Link to="/Termino" className="font-bold text-xl p-4 cursor-pointer text-white hover:text-orange-500 transition-transform duration-300 hover:scale-105">Terminos</Link>
                    <Link to="/Contactos" className="font-bold text-xl p-4 cursor-pointer text-white hover:text-orange-500 transition-transform duration-300 hover:scale-105">Contactos</Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;
