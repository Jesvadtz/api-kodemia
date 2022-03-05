const User = require("../models/users");
const bcrypt = require("../lib/bcrypt");
const jwt = require("../lib/jwt");

function getAll() {
  return User.find({});
}
async function signUp(dataUser) {
  // name, email, password
  // Validar que no exista un usuario con el mail
  const { name, email, password } = dataUser;
  const userFound = await User.findOne({ email }); // objeto {name, passwordd, email}
  // Si no lo encuentra va a regresar un undefined
  if (userFound) throw new Error("User already exists");

  // Encriptar contraseña
  const paswordEncrypted = await bcrypt.hash(password);

  return User.create({ name, email, password: paswordEncrypted });
}

async function login(email, password) {
  const userFound = await User.findOne({ email });
  if (!userFound) throw new Error("Invalid credentials");

  const isValidPassword = await bcrypt.compare(password, userFound.password); // va a devolver un true or false
  if (!isValidPassword) throw new Error("Invalid credentials");

  // regresar token
  return jwt.sign({ id: userFound._id });
}

module.exports = {
  getAll,
  signUp,
  login,
};
