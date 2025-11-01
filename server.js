const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./backend/routes/productRoutes');
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexion con MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Rutas
app.use("/api/productos", productRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});