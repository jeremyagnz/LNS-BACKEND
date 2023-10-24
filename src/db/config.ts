import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const uri = 'mongodb+srv://jeremyagnz:LRB1L7sykZfJSMIl@lns-db.8rcnq13.mongodb.net/lnsdb';
    await mongoose.connection.syncIndexes();
    console.log('🛢️  Connected to DB and Collections Synchronized');
  } catch (error) {
    console.log(`❌ DB CONNECTION ERROR: ${error}`);
  }
};

export default connectToDatabase;