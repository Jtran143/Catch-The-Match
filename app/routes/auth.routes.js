var express = require("express");
var router = express.Router();
var authCtrl = require("../controllers/auth.ctrl");

router.post("/signup", authCtrl.register);
router.post("/login", authCtrl.login);
module.exports = router;