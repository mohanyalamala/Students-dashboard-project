const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mohanmydb", { useNewUrlParser: true });
        console.log("db connected....");
    } catch (err) {
        console.error('MongoDb connection error:', err);
    }
}

module.exports = connectDB;