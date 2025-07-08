const mongoose = require('mongoose');

const connectToDB = ()=>{
    mongoose.connect("mongodb+srv://theakashrajput:IpXkGcIPmV8KjRDP@cluster0.4k2a92w.mongodb.net/cohort")
    .then(()=>{
        console.log("Connected to DB");
    })
}

module.exports = connectToDB 