export default function Acercade() {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
      <img className="absolute top-0 left-0 w-full h-full object-cover" src="https://www.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/05/torre-gaming-3036108.jpg"/>
      <div className="relative z-10 text-center bg-gray-100 bg-opacity-75 p-12 rounded-lg shadow-lg max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Acerca de Vanguardia</h2>
        <p className="text-lg">
          Vanguardia te asegura que tus productos lleguen a salvo. En caso contrario, nuestra empresa se hará cargo de su producto y le devolveremos el dinero si es dentro del país. En caso de que sea de otro país y quiera un reembolso, se estima que su dinero llegará aproximadamente en 4 días por las transacciones internacionales. Si desea el mismo producto, necesitamos que nos envíe un correo que estará en los enlaces de "Contáctanos". Ahí estará toda la información para que obtenga su producto.
        </p>
      </div>
    </div>
  );
}
