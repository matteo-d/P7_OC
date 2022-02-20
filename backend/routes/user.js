const express = require("express");
const router = express.Router();
const userCtrls = require("../controllers/user");
 
// RAJOUTER API LIMITER BRUTE FORCE 
router.get("/users/:id", userCtrls.getUserById);
router.get("/", userCtrls.getAllUsers);
router.post("/", userCtrls.createUser);
router.put("/users/:id", userCtrls.modifyUser);
router.delete("/users/:id", userCtrls.deleteUser);
module.exports = router;
