// Why DataBase needed
// -> 

// API ke andar ka code pe depend karta hai ki hamari website lag karegi ya nahi

// First kaam hai ki express ke server ko jo hamne node.js se create kara hai use mongodb backend se connect karna hai. 

// Mongoose ka kam hai hamare express server ko mongodb database se connect karna

// src folder me hamare server ka main logic jaata hai
// src => db => db.js

/* Production Practice */
// Server ko database se connect karne ka logic tum db.js file me likhoge and
// Server ko database se connect karne ka action tum server.js file me logo

const express = require("express");
const app = express();
const connectToDB = require("./src/db/db");

connectToDB();

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})