const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getProductById,
} = require("../controllers/productController");

// Ruta para obtener todos los productos
router.get("/", getAllProducts);

// Ruta para obtener un producto por ID
router.get("/:id", getProductById);

// Ruta para crear un producto
router.post("/", createProduct);

// Ruta para eliminar un producto por ID
router.delete("/:id", deleteProduct);

// Ruta para actualizar un producto por ID
router.put("/:id", updateProduct);

module.exports = router;
