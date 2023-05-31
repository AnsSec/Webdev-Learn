const express = require("express");
const router = express.Router();

const {
  registerUser,
  login,
  followUser,
  logout,
  updatePassword,
  updateProfile,
  deleteMyProfile,
  myProfile,
} = require("../controllers/user");

const { isAuthenticated } = require("../middlewares/auth");

router.post("/register", registerUser);
router.post("/login", login);
router.get("/logout", logout);
router.route("/follow/:id").get(isAuthenticated, followUser);
router.route("/update/password").put(isAuthenticated, updatePassword);
router.route("/update/profile").put(isAuthenticated, updateProfile);
router.route("/delete/me").delete(isAuthenticated, deleteMyProfile);
router.route("/me").delete(isAuthenticated, myProfile);


module.exports = router;
