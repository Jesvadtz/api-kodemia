const mongoose = require("mongoose");

// destructuring

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

function connect() {
  return mongoose.connect(URL); // Me regresa una promesa
}

module.exports = connect;
