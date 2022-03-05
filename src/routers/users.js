const express = require("express");
const users = require("../useCases/users");

const router = express.Router();

router.post("/signup", async (request, response) => {
  try {
    const userData = request.body;
    const userCreated = await users.signUp(userData);

    response.json({
      success: true,
      message: "user created",
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "Could not register",
      error: error.message,
    });
  }
});
router.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    const token = await users.login(email, password);

    response.json({
      success: true,
      message: "user logged In",
      data: {
        token,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "Could not register",
      error: error.message,
    });
  }
});

module.exports = router;
