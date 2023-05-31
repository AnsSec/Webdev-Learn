const express = require("express");
const router = express.Router();

const {
  registerUser,
  login,
  followUser,
  logout,
  updatePassword,
  updateProfile,
} = require("../controllers/user");

const { isAuthenticated } = require("../middlewares/auth");

router.post("/register", registerUser);
router.post("/login", login);
router.get("/logout", logout);
router.route("/follow/:id").get(isAuthenticated, followUser);
router.route("/update/password").put(isAuthenticated, updatePassword);
router.route("/update/profile").put(isAuthenticated, updateProfile);

module.exports = router;
