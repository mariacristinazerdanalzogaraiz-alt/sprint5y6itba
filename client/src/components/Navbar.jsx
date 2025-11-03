import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/productos">Productos</Link> |{" "}
      <Link to="/contacto">Contacto</Link> |{" "}
      <Link to="/admin/crear-producto">Crear Producto</Link>
    </nav>
  );
}
