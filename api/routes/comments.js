const express = require("express");
const {getComments, addComments} = require("../controllers/comments")
const router = express.Router();

router.get("/getComments", getComments);
router.post("/addComments", addComments);

module.exports = router;