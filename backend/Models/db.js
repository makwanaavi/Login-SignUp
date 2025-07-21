const mongoose = require("mongoose");

const mongo_uri = process.env.MONGO_CONNECTION;

mongoose.connect(mongo_uri)
  .then(() => {
    console.log("Connected to MongoDB successfully...");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
