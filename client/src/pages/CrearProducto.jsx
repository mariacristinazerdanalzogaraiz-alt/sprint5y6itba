import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CrearProducto() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    imagenUrl: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3001/api/productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    navigate("/productos");
  };

  return (
    <div>
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" onChange={handleChange} />
        <input name="descripcion" placeholder="Descripción" onChange={handleChange} />
        <input name="precio" type="number" placeholder="Precio" onChange={handleChange} />
        <input name="stock" type="number" placeholder="Stock" onChange={handleChange} />
        <input name="imagenUrl" placeholder="URL de Imagen" onChange={handleChange} />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
