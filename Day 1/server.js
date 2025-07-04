const http = require('http');

const server = http.createServer((req, res)=>{
    res.end("Hello from the server!");
}); // Server is created

server.listen(3000, ()=>{
    console.log("Server is running on port 3000");
}) // Server is start