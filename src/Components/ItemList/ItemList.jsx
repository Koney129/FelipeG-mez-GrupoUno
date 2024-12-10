import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../Data/Ventas";
import Item from "../Item/Item";

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  const categories = ['Todos', 'Accesorio para PC', 'Computadora portatil', 'Electrodomestico']; 

  const filterProducts = (category) => {
    setSelectedCategory(category);
    if (category === 'Todos') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => filterProducts(category)}
            className={`px-4 py-2 m-2 rounded ${
              selectedCategory === category ? 'bg-yellow-500 text-Black' : 'bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/item/${product.id}`}>
            <Item {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

