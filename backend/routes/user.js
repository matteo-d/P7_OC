const express = require("express");
const router = express.Router();
const userCtrls = require("../controllers/user");
const multer = require("../middlewares/multer-config");
const auth = require("../middlewares/auth");
 
// RAJOUTER API LIMITER BRUTE FORCE 
router.get("/users/:id", auth, userCtrls.getUserById);
router.get("/", auth, userCtrls.getAllUsers);
router.put("/users/:id", auth, userCtrls.modifyUser);
router.delete("/users/:id", auth, userCtrls.deleteUser);

module.exports = router;
