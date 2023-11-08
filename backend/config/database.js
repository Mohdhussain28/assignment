const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({ path: "../.env" });

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
        console.log('Connected to MongoDB');
    });

}

module.exports = connectDatabase;