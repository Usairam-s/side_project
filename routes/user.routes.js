const express = require("express");
const { signup } = require("../controllers/user.controller.js");
const { signin } = require("../controllers/user.controller.js");
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
