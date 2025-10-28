import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";
import CrearProducto from "./pages/CrearProducto";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/crear" element={<CrearProducto />} />
    </Routes>
  );
}

export default App;
