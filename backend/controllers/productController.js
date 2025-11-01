const Product = require("/models/Product");

// Obtener todos los productos
const getAllProducts = async (req, res) => {
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

// Crear un nuevo producto
const createProduct = async (req, res) => {
  try {
    const nuevoProducto = new Product(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ error: "Error al crear producto" });
  }
};

// Eliminar un producto
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ mensaje: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar producto" });
  }
};

// Actualizar un producto
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productoActualizado = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.json(productoActualizado);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar producto" });
  }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Product.findById(id);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener producto" });
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getProductById,
};
