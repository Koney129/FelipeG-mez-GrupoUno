import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../Data/Ventas";
import Loading from "../Loading/Loading";
import useStore from "../../Vanguard/StoreVan"; 

export default function ItemDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useStore((state) => state.addToCart); 

  useEffect(() => {
    setLoading(true);
    getProducts().then((data) => {
      const foundProduct = data.find((item) => item.id === parseInt(id));
      setProduct(foundProduct);
      setLoading(false);
    });
  }, [id]);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const precioTotal = product ? product.price * quantity : 0;

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center">
        <img src={product.img} alt={product.name} className="w-1/2 h-auto object-cover rounded-lg" />
      </div>
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-500">{product.description}</p>
      <p className="text-lg font-bold mt-2">
        Precio: {product.price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
      </p>
      <p className="text-sm mt-1">Stock: {product.stock}</p>

      <div className="flex items-center mt-4">
        <button 
          onClick={decrementQuantity} 
          className="rounded-[5px] hover:bg-red-600 hover:text-white w-[50px] border text-[20px] flex justify-center"
        > 
          - 
        </button>
        <p className="text-[20px] px-[10px]">{quantity}</p>
        <button 
          onClick={incrementQuantity} 
          className="rounded-[5px] hover:bg-red-600 hover:text-white w-[50px] border text-[20px] flex justify-center"
        > 
          + 
        </button>
      </div>

      <p className="text-[20px] my-[20px]">Precio: {product.price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })} por unidad</p>
      <p className="text-[20px] my-[20px]">Precio Total: {precioTotal.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</p>

      <button 
        onClick={handleAddToCart} 
        className="bg-green-500 text-white text-[20px] px-[20px] py-[5px] hover:bg-green-700"
      >
        Agregar al Carrito
      </button>
    </div>
  );
}
