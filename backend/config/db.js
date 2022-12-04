const mongoose = require('mongoose')

// "mongodb://127.0.0.1:27017/employees"
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
// mongodb+srv://bire123:bire123@cluster0.koxhl3t.mongodb.net/mern-stack?retryWrites=true&w=majority

module.exports = connectDB

