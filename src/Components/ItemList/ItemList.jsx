import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../Data/Ventas";
import Item from "../Item/Item";

export default function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Lista de Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link key={product.id} to={`/item/${product.id}`}>
            <Item {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
