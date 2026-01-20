const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://ashoksuthar7849_db_user:IxNfeHIXqybtcowB@edutrack.sm6sk18.mongodb.net/"
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Mongo Atlas Connected");
    } catch (error) {
        console.log("Mongo Connection Failed :", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;