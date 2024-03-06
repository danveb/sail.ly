const express = require("express");
const router = express.Router();
const { getClubs, addClub, getClubSnake, getClubID, updateClub, deleteClub } = require("../controllers/clubController");

// CRUD - CREATE / READ / UPDATE / DELETE 
router.get("/", getClubs);
router.post("/", addClub);
router.get("/:snake", getClubSnake);
router.get("/:id", getClubID);
router.put("/:snake", updateClub);
router.delete("/:snake", deleteClub);

module.exports = router
