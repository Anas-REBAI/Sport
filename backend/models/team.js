// import monggose module
const mongoose = require("mongoose");
// create Match Schema
const teamSchema = mongoose.Schema({
    teamName: String,
    teamOwner: String,
    coach: String,    
    foundation: String,  
})

// Affect Match schema to model Name Match
const team = mongoose.model("Team", teamSchema);
// Make match exportable
module.exports = team;