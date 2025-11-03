import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://tu-api-render.com/api/productos/${id}`)
      .then(res => res.json())
      .then(setProducto);
  }, [id]);

  const eliminarProducto = async () => {
    if (window.confirm("¿Deseás eliminar este producto?")) {
      await fetch(`https://tu-api-render.com/api/productos/${id}`, {
        method: "DELETE",
      });
      navigate("/productos");
    }
  };

  if (!producto) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagenUrl} alt={producto.nombre} width="200" />
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <button onClick={eliminarProducto}>Eliminar</button>
    </div>
  );
}
