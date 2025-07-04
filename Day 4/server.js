// Today i completed my notes application project. I take a basic idea about middleware and used it in my project.

const express = require('express');
const app = express();

let notes = [];

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Home Page");
})
app.get("/notes", (req, res) => {
    res.json(notes)
})
app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.json({
        message: "Data recived"
    })
})
app.delete("/notes/:index", (req, res) => {
    const index = req.params.index;
    notes = notes.filter((item, idx) => idx != index);
    res.send({
        message: `${index} data deleted successfully`
    })
})
app.patch("/notes/:index", (req, res) => {
    const index = req.params.index;
    let { title } = req.body;
    notes[index].title = title;
    res.json({ message: "title updated successfully" })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})