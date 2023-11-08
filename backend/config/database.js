const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({ path: "./config.env" });

const connectDatabase = () => {
    mongoose.connect('mongodb+srv://md28mdhussain:nminruwO2FoQUdHV@cluster0.cokvi3i.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
        console.log('Connected to MongoDB');
    });

}

module.exports = connectDatabase;