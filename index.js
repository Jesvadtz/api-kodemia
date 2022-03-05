// Va a inicializar mi aplicación
// Vamos a iniciar el servidor

require("dotenv").config();
const server = require("./src/server");
const dbConnect = require("./src/lib/db");

// console.log(process.env);
const PORT = process.env.PORT || 8080;

dbConnect()
  .then(() => {
    console.log("Database connected :D");
    server.listen(PORT, () => {
      console.log("Server running on port 8080");
    });
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

/*
RECETA:
 1. Crear (asegurarme de que exista) el modelo necesario (models)
 2. Crear el uso del caso necesario (useCases)
 3. Crear el endpoint (routers)
 */
/*
PRÁCTICA:
POST /koders
PATCH /koders/:id
DELETE /koders/:id
GET /koders/:id
*/

// Authentication

// Authorization

// bcryot
// jwt
// flujo de registro y de logueo

// POST /user/login
// body: {email, password}
// response: token

// model users
// crear caso de uso
// enpoint y validad que esté montado
