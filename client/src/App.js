import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";
import CrearProducto from "./pages/CrearProducto";
import DetalleProducto from "./pages/DetalleProducto";
//import Navbar from "./components/Navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Catalogo />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route path="/admin/crear-producto" element={<CrearProducto />} />
        <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}

export default App;
