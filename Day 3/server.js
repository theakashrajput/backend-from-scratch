// Today i started to create a micro project notes application with CRUD operations. Also learn about npx and nodemon package.

const express = require('express');

const app = express(); // Server created

let data = [];
app.use(express.json());
app.post("/notes", (req, res)=>{
    data.unshift(req.body);
    res.json({
        message: "Data submitted succesfully",
        notes: data
    })
})

app.get("/home", (req, res)=>{
    res.send("Welocme to Home page");
})

app.get("/about", (req, res)=>{
    res.send("Welocme to About page");
})



app.listen(3000, ()=>{
    console.log("Server is running on prot 3000");
}) // Server started