// Crete a function which connect Database with server

const mongoose = require("mongoose");

const connectToDB = ()=>{
    mongoose.connect("mongodb+srv://theakashrajput:VCXz3rTBWwTTBysd@cluster0.4k2a92w.mongodb.net/cohort")
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch(err=>console.log("DB Connection Error", err));
}
 
module.exports = connectToDB;