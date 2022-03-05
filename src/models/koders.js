const mongoose = require("mongoose");

const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
    trim: true, // si la cadena llena con espacios al principio o al final, los quita
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    enum: ["m", "f"],
  },
  generation: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
});

const model = mongoose.model("koders", koderSchema);

// Exportando el modelo
module.exports = model;
