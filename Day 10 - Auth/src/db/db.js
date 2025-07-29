const mongoose = require('mongoose');

const connectToDB = () => {
    mongoose.connect(process.env.MONGOOSE_URI)
        .then(() => console.log("Connected to DB"))
        .catch(err => console.log("Error to connect DB", err))
}

module.exports = connectToDB;