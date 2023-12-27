// import monggose module
const mongoose = require("mongoose");
// create Match Schema
const userSchema = mongoose.Schema({
    Name: String,
    email: String,
    pwd: String,
    role: String,
    avatar: String,
})

// Affect Match schema to model Name Match
const user = mongoose.model("User", userSchema);
// Make match exportable
module.exports = user;