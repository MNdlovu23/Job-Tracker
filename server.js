const cors = require("cors")
const express = require("express")
const { createClient } = require("@supabase/supabase-js")

const supabaseUrl = "https://xderhoeuvdpzfdupuezh.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkZXJob2V1dmRwemZkdXB1ZXpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwMzUxOTYsImV4cCI6MjA5MDYxMTE5Nn0.mWCFHvlqOoUkIfY3fGEDwgoPkeZhit0zcgequYKjqvE"
const supabase = createClient(supabaseUrl, supabaseKey)
const app = express()
app.use(cors())
= require("fs")
app.use(express.json())



app.get("/ping", (req, res) => {
    res.json({message: "pong"})
})

app.get("/jobs", async (req, res) => {
    const { data, error} = await supabase
    .from("Jobs")
    .select("*")
    if(error) return res.status(500).json({error: error.message})
    res.json(data)
})

app.post("/jobs", async (req, res) => {
    const { company, role, status} = req.body
    if (!company || !role){
        return res.status(400).json({ error: "Company and role are required. "})
    }
    const job = {
        id: Date.now().toString(),
        company,
        role,
        status: status || "Applied",
        date: new Date().toLocaleDateString(),
    }
    const {data, error } = await supabase 
    .from("Jobs")
    .insert([job])
    .select()
    console.log("Supabase error:", error)  
console.log("Supabase data:", data) 
    if (error) return res.status (500).json({ error:error.message})
        res.status(201).json(data[0])
})
    


app.delete("/jobs/:id", async  (req, res) => {
   const {error } = await supabase
   .from("Jobs")
   .delete()
   .eq("id", req.params.id)
   if (error) return res.status(500).json({error: error .message})
    res.json({success: true})

   
})

app.put("/jobs/:id", async (req, res) => {
    const { company, role, status } = req.body
    const { data, error} = await supabase
    .from("Jobs")
    .update({ company, role, status})
    .eq("id", req.params.id)
    .select()
    if (error) return res.status(500).json({ error:error.message})
        res.json(data[0])
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})
