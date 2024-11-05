import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Enlaces from "./Components/Enlaces/Enlaces";
import ItemList from "./Components/ItemList/ItemList";
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
      <Enlaces />
      <Footer />
    </BrowserRouter>
  );
}
