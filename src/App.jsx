import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
<<<<<<< HEAD
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import Cart from "./Components/Cart/Cart"; 
import Footer from "./Components/Footer/Footer";
import Acercade from "./Components/Acercade/Acercade";
import Contactos from "./Components/Contacto/Contactos";
import Termino from "./Components/Termino/Termino";
import ProductoVan from "./Components/ProductoVan/Producto"; 
=======
import Enlaces from "./Components/Enlaces/Enlaces";
import ItemList from "./Components/ItemList/ItemList";
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import Footer from "./Components/Footer/Footer";

>>>>>>> 06d5b64c22d797e0feb4154bac8bf7fb84047750
export default function App() {
  return (
    <BrowserRouter>
      <Header />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto" element={<ProductoVan />} /> 
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/Acercade" element={<Acercade />} />
        <Route path="/Contactos" element={<Contactos />} />
        <Route path="/Termino" element={<Termino />} />
      </Routes>
=======
      <Home />
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
      <Enlaces />
>>>>>>> 06d5b64c22d797e0feb4154bac8bf7fb84047750
      <Footer />
    </BrowserRouter>
  );
}
