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

// GET /api/clubs
describe("GET /api/clubs", () => {
    test("it returns status code 200", async () => {
        const response = await request(app)
            .get("/api/clubs"); 
        expect(response.statusCode).toBe(200); 
    });

    test("it returns a list of sailing clubs", async () => {
        const response = await request(app)
            .get("/api/clubs"); 
        // console.log(response.body); 
        expect(response.body).not.toBeNull(); 
        expect(response.body.length).not.toBe(0); 
    });

    test("it returns the first sailing club", async () => {
        const response = await request(app)
            .get("/api/clubs"); 
        expect(response.body[0].name).toMatch("Soverel Harbour Marina"); 
    });
}); 

// GET /api/clubs/:snake
describe("GET /api/clubs/:snake", () => {
    test("it returns status code 200", async () => {
        const response = await request(app)
            .get("/api/clubs/soverel-harbour-marina"); 
        expect(response.statusCode).toBe(200); 
    });

    test("it returns the address of Soverel Harbour Marina sailing club", async () => {
        const response = await request(app)
            .get("/api/clubs/soverel-harbour-marina"); 
        expect(response.body[0].address).toMatch("2401 PGA Blvd."); 
        expect(response).toBeTruthy(); 
    });

    test("it returns error when no sailing club matches the ID", async () => {
        const response = await request(app)
            .get("/api/clubs/hello"); 
        expect(response.statusCode).toBe(400); 
    });
});

// POST /api/clubs
describe("POST /api/clubs", () => {
    test("it creates a new sailing club and returns name", async () => {
        const response = await request(app)
            .post("/api/clubs")
            .send({
                name: "Chi Yacht Club", 
                address: "1 E. Yacht Drive",
                city: "Chicago", 
                state: "IL",
                zip: "60601", 
                lat: 10,
                lon: -87,
                tel: "312-000-0001",
                url: "www.chi-yacht-club.com",
                snake: "chi-yacht-club" 
            });
        expect(response.statusCode).toEqual(201);  
        expect(response.body[0].name).toBe("Chi Yacht Club"); 
        expect(response.body[0].id).toBeGreaterThanOrEqual(50); 
        expect(response.body[0].snake).toEqual("chi-yacht-club"); 
    });
});

// PUT /api/clubs/:snake 
describe("PUT /api/clubs/:snake", () => {
    test("it updates an existing sailing club's lat/lon", async () => {
        const response = await request(app)
            .put("/api/clubs/chi-yacht-club")
            .send({
                name: "Chicago Yacht Club", 
                address: "1 E. Yacht Drive",
                city: "Chicago", 
                state: "IL",
                zip: "60601", 
                lat: 45.11,
                lon: -87.26,
                tel: "312-000-0001",
                url: "www.chi-yacht-club.com", 
                snake: "chi-yacht-club"
            });
        expect(response.statusCode).toBe(200); 
        console.log(response.body[0].lat); 
        expect(response.body[0].lat).toBe(45.11); 
        expect(response.body[0].lon).not.toBe("-87.26"); 
    });
});

// DELETE /api/clubs/:id
describe("DELETE /api/clubs/:snake", () => {
    test("it throws error when deleting a non-existing sailing club", async () => {
        const response = await request(app)
            .delete("/api/clubs/"); 
        expect(response.statusCode).toBe(404); 
    });

    test("it correctly deletes a sailing club", async () => {
        const response = await request(app)
            .delete("/api/clubs/50"); 
        // console.log(response.statusCode); 
        expect(response.statusCode).toBe(200); 
    });
});

afterAll(async () => {
    await db.end(); 
}); 
