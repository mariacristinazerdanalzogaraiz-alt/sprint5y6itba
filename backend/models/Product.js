const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  imagenUrl: { type: String }, // URL de imagen
  stock: { type: Number, default: 0 },
});

module.exports = mongoose.model("Product", productSchema);
