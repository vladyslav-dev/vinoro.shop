import mongoose from 'mongoose';

const connection = {};
// console.log(process.env)

async function dbConnect() {

    const db = await mongoose.connect("mongodb+srv://admin:admin@cluster0.12if0.mongodb.net/vinoro-2-0-database", {

    });
}

export default dbConnect;