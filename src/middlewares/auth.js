const jwt = require("../lib/jwt");

function auth(request, response, next) {
  try {
    const { authorization: token } = request.headers; // renombramos la autorización a token
    console.log("token: ", token);

    const isValidToken = jwt.verify(token); // Nos regresa un payload
    console.log("isValidToken: ", isValidToken);
    if (!isValidToken) throw new Error("Not authorized D:");
    request.userCurrent = isValidToken.id;
    next();
  } catch (error) {
    response.status(401);
    response.json({
      success: false,
      message: "Not authorized",
      error: error.message,
    });
  }
}

module.exports = auth;
