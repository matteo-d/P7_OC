const express = require("express");
const router = express.Router();
const userCtrls = require("../controllers/user_controllers");
 
// §§ RAJOUTER API LIMITER BRUTE FORCE 
router.post("/signup", userCtrls.signup);
router.post("/login", userCtrls.login);

module.exports = router;