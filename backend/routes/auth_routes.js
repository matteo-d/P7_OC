const express = require("express");
const router = express.Router();
const authCtrls = require("../controllers/auth_controllers");
 
// RAJOUTER API LIMITER BRUTE FORCE 
router.post("/signup", authCtrls.signup);


module.exports = router;