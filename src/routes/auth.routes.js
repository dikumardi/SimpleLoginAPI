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

router.get("/profile-user",
    authMiddleware,
    getCurrentUser,
)

router.get('/logout', logoutUser)

module.exports = router;
