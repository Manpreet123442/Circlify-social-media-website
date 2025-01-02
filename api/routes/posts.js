const express = require("express");
const router = express.Router();
const {getPosts, addPosts} = require("../controllers/posts");
const upload = require("../utils/multer");

router.get("/getPosts", getPosts);
router.post("/addPosts",upload.single("file"), addPosts);

module.exports = router;