const request = require("supertest")
const app = require("../server")

//Test suite for the Jobs API
describe("Jobs API",() => {

    //Health check
    test("GET /ping retruns pong", async () =>{
        const res = await request(app).get("/ping")
        expect(res.statusCode). toBe(200)
        expect(res.body.message).toBe("pong" )
    })

    //GET all jobs
     test("GET /jobs returns an array", async () => {
        const res = await request(app)
            .get("/jobs")
            .query({ userId: "test123" })
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    })

    // POST new job
    test("POST /jobs creates a new job", async () => {
        const res = await request(app)
            .post("/jobs")
            .send({
                company: "Test Company",
                role: "Junior Developer",
                status: "Applied",
                userId: "test123"
            })
        expect(res.statusCode).toBe(201)
        expect(res.body.company).toBe("Test Company")
        expect(res.body.role).toBe("Junior Developer")
    })

    // POST validation
    test("POST /jobs returns 400 if company is missing", async () => {
        const res = await request(app)
            .post("/jobs")
            .send({
                role: "Junior Developer",
                userId: "test123"
            })
        expect(res.statusCode).toBe(400)
    })

    // DELETE job
    test("DELETE /jobs/:id returns success", async () => {
        // First create a job to delete
        const created = await request(app)
            .post("/jobs")
            .send({
                company: "Delete Me",
                role: "Test Role",
                status: "Applied",
                userId: "test123"
            })
        const id = created.body.id
        const res = await request(app).delete(`/jobs/${id}`)
        expect(res.statusCode).toBe(200)
        expect(res.body.success).toBe(true)
    })

    // Clean up test data after all tests
afterAll(async () => {
    await request(app)
        .get("/jobs")
        .query({ userId: "test123" })
        .then(async (res) => {
            for (const job of res.body) {
                await request(app).delete(`/jobs/${job.id}`)
            }
        })
})

})
