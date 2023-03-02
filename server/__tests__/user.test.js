const request = require("supertest"); 
const app = require("../app"); 
const db = require("../config/db");

describe("Test application", () => {
    test("not found for site 404", async () => {
        const response = await request(app)
            .get("/wrong-path"); 
        expect(response.statusCode).toBe(404); 
    });
});

// GET /api/users
describe("GET /api/users", () => {
    test("it should return status code 200", async () => {
        const response = await request(app)
            .get("/api/users"); 
        // console.log(response); 
        expect(response.statusCode).toBe(200); 
        expect(response.statusCode).not.toBe(400); 
    });
});

// GET /api/users/:id
describe("GET /api/users/:id", () => {
    test("it should return the specific email address of contact with ID 1", async () => {
        const response = await request(app)
            .get("/api/users/1");
        expect(response._body[0].email).toMatch("mike@gmail.com"); 
    });

    test("it does not return the address of user with ID 1", async () => {
        const response = await request(app)
            .get("/api/users/1");
        expect(response._body[0].address).not.toBeTruthy(); 
    });

    test("it should return correct username", async () => {
        const response = await request(app)
            .get("/api/users/1");
        expect(response._body[0].username).toMatch("mike1"); 
    });
});

// POST /api/users
describe("POST /api/users", () => {
    test("it creates a new user successfully", async () => {
        const response = await request(app)
            .post("/api/users")
            .send({
                username: "jojo",
                first_name: "Jojo",
                last_name: "B", 
                email: "jojo@gmail.com", 
                password: "jojo",
            });
        expect(response.statusCode).toBe(201); 
        // console.log(response._body.username); // jojo
        expect(response._body.username).toMatch("jojo"); 
    });
});

// PUT /api/users/:id 
describe("PUT /api/users/:id", () => {
    test("it updates an existing user's info", async () => {
        const response = await request(app)
            .put("/api/users/3")
            .send({
                username: "pepe",
                first_name: "Pepe",
                last_name: "B", 
                email: "pepe@gmail.com", 
                password: "pepe",
            });
        expect(response.statusCode).toBe(200); 
        expect(response._body.username).toMatch("pepe"); 
        expect(response._body.email).toMatch("pepe@gmail.com"); 
    });
});

// DELETE /api/users/:id
describe("DELETE /api/users/:id", () => {
    test("it throws error when deleting a non-existing sailing club", async () => {
        const response = await request(app)
            .delete("/api/users/"); 
        expect(response.statusCode).toBe(404); 
    });

    test("it correctly deletes a user with ID 2", async () => {
        const response = await request(app)
            .delete("/api/users/2"); 
        // console.log(response.statusCode); 
        expect(response.statusCode).toBe(200); 
    });
});

afterAll(async () => {
    await db.end(); 
});
