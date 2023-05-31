const express = require("express");
const {
  createPost,
  likeAndUnlikePosts,
  deletePost,
  updateCaption,
} = require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");
const { getPostOfFollowing } = require("../controllers/post");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);
router
  .route("/post/:id")
  .get(isAuthenticated, likeAndUnlikePosts)
  .put(isAuthenticated, updateCaption)
  .delete(isAuthenticated, deletePost);

router.route("/posts").get(isAuthenticated, getPostOfFollowing);

module.exports = router;
