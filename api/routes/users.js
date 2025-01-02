const express = require("express");
const {getUser, updateUser} = require("../controllers/users");
const upload = require("../utils/multer");

const router = express.Router();

router.get("/users/:id", getUser);
router.patch("/users/update/:id",upload.single("file"), updateUser);

module.exports = router;