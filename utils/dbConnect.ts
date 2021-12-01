import mongoose from 'mongoose';

async function dbConnect() {
    try {
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.12if0.mongodb.net/vinoro-2-0-database", {});
        console.log('MongoDB connected!')
    } catch (err) {
        console.error("MongoDB connection - ERROR")
    }
}

export default dbConnect;