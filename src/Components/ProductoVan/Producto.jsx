import ItemList from "../ItemList/ItemList";

const ProductoVan = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
      <img className="absolute top-0 left-0 w-full h-full object-cover" src="https://wallpapers.com/images/hd/city-pixel-art-94uxial3lbd652g5.jpg" />
      <div className="relative z-10 container mx-auto p-4 bg-opacity-75 ">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">Productos de la Vanguardia</h1>
        <ItemList />
      </div>
    </div>
  );
}

export default ProductoVan;
