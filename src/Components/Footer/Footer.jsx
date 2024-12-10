
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="w-full bg-blue-600 text-gray-200 py-8 px-4 mt-auto">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <Link to="/" className="hover:underline mb-2">Inicio</Link>
                    <Link to="/Acercade" className="hover:underline mb-2">Acerca de</Link>
                    <Link to="/Contactos" className="hover:underline mb-2">Contáctanos</Link>
                </div>
                <div>
                    <h6 className="font-bold uppercase mb-4">Ubicación</h6>
                    <p>País: Chile</p>
                    <p>Región de los Lagos</p>
                    <p>Ciudad: Ancud</p>
                    <p>Calle Aníbal Pinto</p>
                </div>
            </div>
            <div className="text-center mt-8">
                <Link to="/Termino" className="hover:underline">Política de Privacidad</Link>
                <p className="mt-4">&copy; 2024 Vanguardia. Todos los derechos reservados.</p>
            </div>
        </div>
    );
}

export default Footer;
