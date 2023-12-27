// import monggose module
const mongoose = require("mongoose");
// create Match Schema
const matchSchema = mongoose.Schema({
    scoreOne: Number,
    scoreTwo: Number,
    teamOne: String,
    teamTwo: String,
})

// Affect Match schema to model Name Match
const match = mongoose.model("Match", matchSchema);
// Make match exportable
module.exports = match;