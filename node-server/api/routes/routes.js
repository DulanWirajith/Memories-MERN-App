const express = require("express");
const router = express.Router();
const postCOntroller = require("../services/controllers/PostController");

router.post("/add_post", postCOntroller.addPost);
router.get("/get_post/:creater_at", postCOntroller.getPost);
router.get("/get_posts", postCOntroller.getPosts);

module.exports = router;
