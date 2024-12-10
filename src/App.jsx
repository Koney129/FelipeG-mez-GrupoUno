import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import Cart from "./Components/Cart/Cart"; 
import Footer from "./Components/Footer/Footer";
import Acercade from "./Components/Acercade/Acercade";
import Contactos from "./Components/Contacto/Contactos";
import Termino from "./Components/Termino/Termino";
import ProductoVan from "./Components/ProductoVan/Producto"; 
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto" element={<ProductoVan />} /> 
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/Acercade" element={<Acercade />} />
        <Route path="/Contactos" element={<Contactos />} />
        <Route path="/Termino" element={<Termino />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
