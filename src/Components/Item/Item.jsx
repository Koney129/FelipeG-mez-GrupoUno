import React from 'react';
import { Link } from "react-router-dom";

const formatPrice = (price) => {
  return price.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP', 
  });
};

export default function Item({ id, name, price, img, category, stock }) {
  const formattedPrice = formatPrice(price); 

  return (
    <div className="bg-white/50 p-4 shadow-lg rounded-lg hover:scale-105 transition-transform">
      <img src={img} alt={name} className="w-full h-42 object-cover rounded-lg" /> 
      <h3 className="text-lg font-bold hover:text-red-500 my-2">{name}</h3>
      <p className="text-gray-500">{formattedPrice}</p> 
      <p className="text-sm text-gray-400">Categoría: {category}</p>
      <p className={`text-sm ${stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {stock > 0 ? `En stock: ${stock}` : 'Agotado'}
      </p>
      <Link to={`/item/${id}`} className="text-blue-500 hover:underline">
        Ver Detalles
      </Link>
    </div>
  );
}
