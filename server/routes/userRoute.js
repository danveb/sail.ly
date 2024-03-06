const express = require("express");
const router = express.Router();
const { getUsers, addUser, getUser, updateUser, deleteUser } = require("../controllers/userController");

// CRUD - CREATE / READ / UPDATE / DELETE 
router.get("/", getUsers);
router.post("/", addUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router
