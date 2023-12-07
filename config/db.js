// const mongoose = require("mongoose");
// const colors = require("colors");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
//   } catch (error) {
//     console.log(`Mongodb Server Issue ${error}`.bgRed.white);
//   }
// };

// module.exports = connectDB;
const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`.bgRed.white);
    process.exit(1); // Exit the process on connection failure
  }
};

module.exports = connectDB;
