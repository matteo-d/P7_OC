const express = require("express");
const router = express.Router();
const authCtrls = require("../controllers/auth_controllers");
 
// RAJOUTER API LIMITER BRUTE FORCE 
router.post("/signup", authCtrls.signup);
router.post("/login", authCtrls.login);

module.exports = router;