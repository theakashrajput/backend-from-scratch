const mongoose = require('mongoose');
// Note Scheema
const noteScheema = new mongoose.Schema({ 
    title: String, 
    content: String
}); // Data ka structure kesa hoga ye batata hai, Kind of bluprint of data

// Note Model
const Note = mongoose.model("Note", noteScheema); // CRUD operation easy karta hai
 
module.exports = Note;