// import monggose module
const mongoose = require("mongoose");
// create player Schema
const playerSchema = mongoose.Schema({
    fullName: String,
    birthday: String,
    poste: String, 
    avatar: String,

    team_id: {type:  mongoose.Schema.Types.ObjectId, ref: "Team"},
})

// Affect player schema to model Name player
const player = mongoose.model("Player", playerSchema);
// Make player exportable
module.exports = player;