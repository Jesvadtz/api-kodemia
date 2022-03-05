// Es el archivo donde vamos a guardar la DEFINICIÓN de mi servidor
// Configurar middlewares
// Montar los routers
const express = require("express");
const cors = require("cors");
const kodersRouter = require("./routers/koders");
const usersRouter = require("./routers/users");

const server = express();

// Middlewares
server.use(cors());
server.use(express.json());

// Routers
server.use("/koders", kodersRouter);
server.use("/users", usersRouter);

module.exports = server;
