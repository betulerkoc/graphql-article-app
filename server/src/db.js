const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const dbConnect = () => {
    mongoose.connect( process.env.MONGO_URI, {
        useUnifiedTopology: true
    });
   
    mongoose.connection.on('open', () => {
        console.log("MongoDB connected")
    })
    mongoose.connection.on("err", (e) => {
        console.log("Error", e)
    })
}

module.exports = dbConnect;


