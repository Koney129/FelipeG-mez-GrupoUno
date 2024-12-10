export default function Contactos() {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover" src="https://images.pexels.com/photos/159839/office-home-house-desk-159839.jpeg?cs=srgb&dl=pexels-pixabay-159839.jpg&fm=jpg"/>
      <div className="relative z-10 text-center bg-gray-100 bg-opacity-75 p-12 rounded-lg shadow-lg max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Ayuda Vanguardia</h2>
        <p className="text-lg mb-4">
        Hola necesita ayuda en su producto o alguna consulta por aqui dejaremos nuetro correo Vanguardia@gmail.com si es mas comodo para usted puede optar por whatsapp es +5697589478
        </p>
      </div>
    </div>
  );
}