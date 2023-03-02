const pool = require("../config/db"); 
const bcrypt = require("bcryptjs"); 
require("dotenv").config(); 

// GET /api/users 
const getUsers = async (req, res, next) => {
    try {
        const users = await pool.query('SELECT * FROM users'); 
        // console.log(users.rows); // [{ id: 1, ... }]
        // error check if no users available
        if(users.rows.length === 0) {
            res.status(400);
            throw new Error("No users available"); 
        };
        // send status 200 and return users 
        res.status(200).json(users.rows); 
    } catch(error) {
        next(error); 
    };
};

// POST /api/users 
const addUser = async (req, res, next) => {
    try {
        // req.body 
        const { username, first_name, last_name, email, password } = req.body; 

        // hash password with BCRYPTJS 
        // - generate salt with 10 rounds (max 12) 
        const salt = await bcrypt.genSalt(10); 
        // - hash password from req.body together with salt 
        const hashedPassword = await bcrypt.hash(password, salt); 

        // check for no user data?
        if(!username || !first_name || !last_name || !email || !password) {
            res.status(400);
            throw new Error("Missing fields. Please try again."); 
        }; 

        // check for duplicate user? 
        const duplicateCheck = await pool.query('SELECT * FROM users WHERE username = $1', [username]); 
        if(duplicateCheck.rows.length > 0) {
            res.status(400);
            throw new Error("Username already taken. Please try again."); 
        };         

        // INSERT query and pass hashedPassword
        const user = await pool.query('INSERT INTO users (username, first_name, last_name, email, password) VALUES($1, $2, $3, $4, $5) RETURNING id, username, first_name, last_name, email, password', [username, first_name, last_name, email, hashedPassword]); 
        
        // console.log(user); // [{ id: 3, username: 'peach', first_name: 'Peach', last_name: 'B', email: 'peach@gmail.com', password: '...' }]

        // send status 201 and return users
        res.status(201).json(user.rows[0]); 
    } catch(error) {
        next(error); 
    };
};

// GET /api/users/:id 
const getUser = async (req, res, next) => {
    try {
        // req.params 
        const { id } = req.params; 
        // SELECT query
        const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        // error check for non-existing user 
        if(user.rows.length === 0) {
            res.status(400);
            throw new Error("No user found"); 
        };
        // console.log(user.rows);
        // send status 200 and return user
        res.status(200).json(user.rows); 
    } catch(error) {
        next(error); 
    };
};

// PUT /api/users/:id 
const updateUser = async (req, res, next) => {
    try {
        // req.params & req.body to update user 
        const { id } = req.params; 
        const { username, first_name, last_name, email, password } = req.body; 

        // rehash password with bcrypt 
        // - generate salt with 10 rounds (max 12) 
        const salt = await bcrypt.genSalt(10); 
        // - hash password together with salt
        const rehashedPassword = await bcrypt.hash(password, salt); 

        // UPDATE query
        const user = await pool.query('UPDATE users SET username = $1, first_name = $2, last_name = $3, email = $4, password = $5 WHERE id = $6 RETURNING id, username, first_name, last_name, email, password', [username, first_name, last_name, email, rehashedPassword, id]); 
        // console.log(user.rows);
        // send status 200 and return updated user 
        res.status(200).json(user.rows[0]); 
    } catch(error) {
        next(error); 
    };
};

const deleteUser = async (req, res, next) => {
    try {
        // req.params 
        const { id } = req.params; 
        // DELETE query
        const user = await pool.query('DELETE FROM users WHERE id = $1', [id]); 
        // // error check for non-existing user 
        if(!id) {
            res.status(404);
            throw new Error("Could not find user"); 
        };
        // console.log(user); 
        // send status 200 and send custom message
        res.status(200).send(`User ${id} deleted.`); 
    } catch(error) {
        next(error); 
    };
};

module.exports = {
    getUsers, 
    addUser, 
    getUser, 
    updateUser, 
    deleteUser, 
}