const express = require("express");
const router = express.Router();
const userCtrls = require("../controllers/user");
 
// RAJOUTER API LIMITER BRUTE FORCE 
router.get("/users/:id", userCtrls.getUserById);
router.get("/users", userCtrls.getAllUsers);
router.post"/users", userCtrls.createUser);
router.put("/users/:id", userCtrls.modifyUser);
router.del("/users/:id", userCtrls.deleteUser);
module.exports = router;
