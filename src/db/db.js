const mongoose = require("mongoose");

async function connectDB() {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Successfully connected to DB");
    })
    .catch((err) => {
      console.error(err);
    });
}



module.exports = connectDB;