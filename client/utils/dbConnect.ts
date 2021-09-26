import mongoose from 'mongoose';

const connection = {};
// console.log(process.env)

async function dbConnect() {

    // if (connection.isConnected) {
    //     return;
    // }

    const db = await mongoose.connect("mongodb+srv://admin:admin@cluster0.12if0.mongodb.net/vinoro-2-0-database", {

    });

    // connection.isConnected = db.connections[0].readyState;
    // console.log("connection ", connection)
}

export default dbConnect;