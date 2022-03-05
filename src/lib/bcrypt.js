const bcrypt = require("bcrypt");

const saltRounds = 10;

function hash(plainText) {
  return bcrypt.hash(plainText, saltRounds);
}
// Exportamos la libreria y sobreescribimos el método hash
module.exports = {
  ...bcrypt, // Spread operator
  hash,
};
