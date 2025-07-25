const mongoose = require('mongoose');

const connectToDB = () => {
    mongoose.connect(process.env.MONGOOSE_URI)
        .then(() => console.log("Connected to MongoDB"))
        .catch(err => console.log("Failed to connect to MongoDB", err));
}

module.exports = connectToDB;
