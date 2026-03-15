const cors = require("cors")
const express = require("express")
const app = express()
app.use(cors())
const fs = require("fs")
app.use(express.json())

function saveJobs() {
fs.writeFileSync("jobs.json",JSON.stringify(jobs) )
}

function loadJobs(){
    try {
const data = fs.readFileSync("jobs.json","utf8")
return JSON.parse(data)
    } catch {
        return[]
    }
}

let jobs = loadJobs()

app.get("/ping", (req, res) => {
    res.json({message: "pong"})
})

app.get("/jobs", (req, res) => {
    res.json(jobs)
})

app.post("/jobs", (req, res) => {
    const job = req.body
    job.id = Date.now().toString()
    job.date = new Date().toLocaleDateString()
    jobs.push(job)
    saveJobs()
    res.json(job)
})

app.delete("/jobs/:id", (req, res) => {
    jobs = jobs.filter(job => job.id !== req.params.id)
    saveJobs()
    res.json({success: true})

})

app.put("/jobs/:id", (req, res) => {
    const index = jobs.findIndex(job => job.id === req.params.id)
    if (index === -1) return res.status(404).json({ error: "Job not found" })
    jobs[index] = { ...jobs[index], ...req.body }
    saveJobs()
    res.json(jobs[index])
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})
