import useStore from "../../Vanguard/StoreVan";

export default function Cart() {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);
  const addToCart = useStore((state) => state.addToCart);
  const updateQuantity = useStore((state) => state.updateQuantity);

  const totalPagar = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
      <img className="absolute top-0 left-0 w-full h-full object-cover" src="https://business.trustedshops.es/hubfs/1-TS_B2B/content/uk/20241120-average-order-value/feat-average-order-value-w740h370.webp"/>
      <div className="relative z-10 container mx-auto p-4 bg-white bg-opacity-75 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Carrito Vanguard</h1>
        {cart.length === 0 ? (
          <p>Tu carrito Vanguard está vacío añadele cosas .</p>
        ) : (
          <div>
            {cart.map((product) => (
              <div key={product.id} className="flex justify-between items-center mb-4">
                <img src={product.img} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                <div>
                  <h2 className="text-xl font-bold">{product.name}</h2>
                  <p className="text-gray-500">
                    Precio: {product.price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
                  </p>
                  <div className="flex items-center">
                    <button className="px-2 py-1 bg-gray-200" onClick={() => updateQuantity(product.id, product.quantity - 1)}disabled={product.quantity <= 1}>
                      -
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button className={`px-2 py-1 ${product.quantity >= product.stock ? 'bg-transparent' : 'bg-gray-200'}`} onClick={() => addToCart(product)} disabled={product.quantity >= product.stock}>
                      +
                    </button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(product.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                  Eliminar
                </button>
              </div>
            ))}
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-2xl font-bold">Total a Pagar:</h2>
              <p className="text-2xl font-bold">
                {totalPagar.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
              </p>
            </div>
            <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 mt-4">
              Vaciar Carrito
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mt-8">
              Confirmar compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
