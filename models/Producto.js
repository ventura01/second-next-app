import mongoose from "mongoose";

const ProductoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Por favor ingrese un titulo."],
  },
  plot: {
    type: String,
    required: [true, "Por favor ingrese una descripcion."],
  },
  price: {
    type: String,
    required: [true, "Por favor ingrese un precio."],
  },
});

export default mongoose.models.Producto ||
  mongoose.model("Producto", ProductoSchema);
