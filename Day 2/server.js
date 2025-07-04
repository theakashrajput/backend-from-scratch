// Created my first server with the help of 'http' modual and after that learn about express a node.js application/framework which provide us some extra feature like auto error request handling. With express i created my second server and routes. 


// const http = require('http');
// const server = http.createServer((req, res)=>{
//     res.end("Hello from the server!");
// });
// server.listen(3000, ()=>{
//     console.log("Server started on port 3000");
// })

const express = require('express');
const app = express(); // Server created
app.get('/home', (req, res)=>{
    console.log(req);
    res.send("Welcome to the Home page");
})
app.get('/about', (req, res)=>{
    res.send("Welcome to the About page");
})
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})