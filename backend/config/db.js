
const mongoose = require("mongoose");

const connectionstr =  "mongodb://localhost:27017/local";


mongoose.connect(connectionstr,{useCreateIndex: true, useNewUrlParser: true }).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

