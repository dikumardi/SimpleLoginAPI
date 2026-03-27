const express = require("express");

const {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser
} = require("../controller/auth.controller");

const {authMiddleware} = require('../middleware/auth.middleware');

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/user-profile",
    authMiddleware,
    getCurrentUser,
)

router.post('/logout', logoutUser)

module.exports = router;
