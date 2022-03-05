// Importación de modelo
const Koder = require("../models/koders");

function getAll() {
  return Koder.find({}); // Regresa una promesa
}
function create(dataKoder) {
  const { name, lastName, age, gender, generation } = dataKoder;
  return Koder.create({ name, lastName, age, gender, generation });
}
function getById(idKoder) {
  return Koder.findById(idKoder);
}
function patchById(idKoder, dataToUpdate) {
  return Koder.findByIdAndUpdate(idKoder, dataToUpdate, {
    new: true,
  });
}
function deleteById(idKoder) {
  return Koder.findByIdAndDelete(idKoder);
}

module.exports = {
  getAll, // Es un objeto
  create,
  getById,
  patchById,
  deleteById,
};
