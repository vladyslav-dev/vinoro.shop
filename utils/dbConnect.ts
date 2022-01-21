import mongoose from 'mongoose';

const connection: any = {};

async function db() {
  if (connection.isConnected) {
    // already connected
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      // use previous connection
      return;
    }
    await mongoose.disconnect();
  }
  const dbConnect = await mongoose.connect(process.env.MONGO_URI, {});
  console.log('MongoDB new connection!');
  connection.isConnected = dbConnect.connections[0].readyState;
}

export default db;