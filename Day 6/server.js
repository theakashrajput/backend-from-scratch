const express = require("express");
const app = express(); // Server is created
const connectToDB = require("./src/db/db"); // Required DB connection function
const Note = require("./src/models/note.model"); // Notemodel

connectToDB(); // Called DB connection func

app.use(express.json()); // Middleware to convert raw data into json

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to the home page");
})

// Notes API 

// Get request to recive and load data from database
app.get("/notes", async (req, res) => {
    const notes = await Note.find()
    res.json({
        message: "Data fetched successfully",
        notes
    });
})

// Post request to send data to db and create a new not from that data
app.post("/notes", async (req, res) => {
    let { title, content } = req.body;
    await Note.create({
        title, content
    })
    res.json({
        message: "Note created successfully"
    })
})

// Delete the note with the help of its unique ID and return that note
app.delete("/notes/:id", async (req, res) => {
    const noteID = req.params.id;
    const deletedNote = await Note.findOne({
        _id: noteID
    })
    await Note.findOneAndDelete({
        _id: noteID
    });
    res.json({
        message: "Note deleted successfully",
        deletedNote
    })
})

// Patch request to update the note title based on its ID
app.patch("/notes/:id", async (req, res) => {
    const noteID = req.params.id;
    const { title } = req.body;
    await Note.findOneAndUpdate({
        _id: noteID
    }, {
        title: title
    })
    let updatedNote = await Note.findOne({
        _id: noteID
    })
    res.json({
        message: "Note updated successfully",
        updatedNote
    })
})

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})