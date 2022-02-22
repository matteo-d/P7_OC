const express = require("express");
const router = express.Router();
const userCtrls = require("../controllers/user");
const multer = require("../middlewares/multer-config");
const auth = require("../middlewares/auth");
 
// RAJOUTER API LIMITER BRUTE FORCE 
router.get("/:id", auth, userCtrls.getUserById);
router.get("/", auth, userCtrls.getAllUsers);
router.put("/:id", auth, multer, userCtrls.modifyUser);
router.delete("/:id", auth, userCtrls.deleteUser);

module.exports = router;
