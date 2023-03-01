const express = require("express"); 
const router = express.Router(); 
const { getClubs, addClub, getClub, updateClub, deleteClub } = require("../controllers/clubController"); 

// CRUD - CREATE / READ / UPDATE / DELETE 
router.get("/", getClubs); 
router.post("/", addClub); 
router.get("/:id", getClub); 
router.put("/:id", updateClub); 
router.delete("/:id", deleteClub); 

module.exports = router
