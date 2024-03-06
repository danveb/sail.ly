const pool = require("../config/db");

// GET /api/clubs 
const getClubs = async (req, res, next) => {
  try {
    const clubs = await pool.query('SELECT * FROM clubs');
    // error check if no clubs available
    if (clubs.rows.length === 0) {
      res.status(400);
      throw new Error("No clubs available");
    };
    // console.log(club.rows);
    // send status 200 and return clubs 
    res.status(200).json(clubs.rows);
  } catch (error) {
    next(error);
  };
};

// POST /api/clubs 
const addClub = async (req, res, next) => {
  try {
    // req.body 
    const { name, address, city, state, zip, lat, lon, tel, url, snake } = req.body;
    // INSERT query
    const club = await pool.query('INSERT INTO clubs (name, address, city, state, zip, lat, lon, tel, url, snake) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id, name, address, city, state, zip, lat, lon, tel, url, snake', [name, address, city, state, zip, lat, lon, tel, url, snake]);
    // console.log(club.rows); 
    // send status 201 and return clubs
    res.status(201).json(club.rows);
  } catch (error) {
    next(error);
  };
};

// GET /api/clubs/:snake 
const getClubSnake = async (req, res, next) => {
  try {
    // req.params 
    const { snake } = req.params;
    // SELECT query
    const club = await pool.query('SELECT * FROM clubs WHERE snake = $1', [snake]);
    // error check for non-existing club 
    if (club.rows.length === 0) {
      res.status(400);
      throw new Error("No club found");
    };
    // console.log(club.rows);
    // send status 200 and return club
    res.status(200).json(club.rows);
  } catch (error) {
    next(error);
  };
};

// GET /api/clubs/:id 
const getClubID = async (req, res, next) => {
  try {
    // req.params 
    const { id } = req.params;
    // SELECT query
    const club = await pool.query('SELECT * FROM clubs WHERE id = $1', [id]);
    // error check for non-existing club 
    if (club.rows.length === 0) {
      res.status(400);
      throw new Error("No club found");
    };
    // console.log(club.rows);
    // send status 200 and return club
    res.status(200).json(club.rows);
  } catch (error) {
    next(error);
  };
};

// PUT /api/clubs/:snake 
// const updateClub = async (req, res, next) => {
//     try {
//         // req.params & req.body to update club 
//         const { snake } = req.params; 
//         const { name, address, city, state, zip, lat, lon, tel, url } = req.body; 

//         // UPDATE query
//         const club = await pool.query('UPDATE clubs SET name = $1, address = $2, city = $3, state = $4, zip = $5, lat = $6, lon = $7, tel = $8, url = $9, snake = $10 WHERE snake = $10 RETURNING *', [name, address, city, state, zip, lat, lon, tel, url, snake]); 
//         // console.log(club.rows); 
//         // send status 200 and return updated club 
//         res.status(200).json(club.rows); 
//     } catch(error) {
//         next(error); 
//     };
// };

const updateClub = async (req, res, next) => {
  try {
    // snake from req.params to update club
    const { snake } = req.params;
    const { name, address, city, state, zip, lat, lon, tel, url } = req.body;
    const club = await pool.query('UPDATE clubs SET name = $1, address = $2, city = $3, state = $4, zip = $5, lat = $6, lon = $7, tel = $8, url = $9 WHERE snake = $10 RETURNING *', [name, address, city, state, zip, lat, lon, tel, url, snake]);
    // console.log(club.rows); 
    res.status(200).json(club.rows);
  } catch (error) {
    next(error);
  };
};

// DELETE /api/clubs/:snake
const deleteClub = async (req, res, next) => {
  try {
    // req.params 
    const { snake } = req.params;
    // DELETE query
    const club = await pool.query('DELETE FROM clubs WHERE snake = $1', [snake]);
    // error check for non-existing club 
    if (!club) {
      res.status(404);
      throw new Error("Could not find club");
    };
    // console.log(club); 
    // send status 200 and send custom message
    res.status(200).send(`Club ${snake} deleted.`);
  } catch (error) {
    next(error);
  };
};

module.exports = {
  getClubs,
  addClub,
  getClubSnake,
  getClubID,
  updateClub,
  deleteClub,
}
