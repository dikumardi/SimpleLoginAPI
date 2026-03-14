const mongoose = require("mongoose");

async function connectedDB() {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Successfully Connected to DB");
    })
    .catch((err) => {
      console.error("Failed to connect to DB ", err);
    });
}
module.exports = connectedDB