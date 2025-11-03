import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/productos")
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      {productos.map(p => (
        <div key={p._id}>
          <Link to={`/productos/${p._id}`}>
            <h3>{p.nombre}</h3>
          </Link>
          <p>${p.precio}</p>
          <img src={p.imagenUrl} alt={p.nombre} width="150" />
        </div>
      ))}
    </div>
  );
}
