// import "express" module
const express = require("express");

// import "body-parser" module
const bodyParser = require("body-parser");

// import "axios" module
const axios = require("axios");

// import "Bcrypt" module
const bcrypt = require("bcrypt");

// import mongoose module
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/footDB');

// file
const path = require("path");
const multer = require("multer");

// import jsonwebtoken
const jwt = require('jsonwebtoken');
// import express-session 
const session = require('express-session');

// creates express application (app)
const app = express();

// app configuration (".use" méthode lel config)
app.use(bodyParser.json());                          // envoyer les objets sous format json
app.use(bodyParser.urlencoded({extended: true}));   // récuperer un objet from request (Post / Put)
app.use('/files', express.static(path.join('backend/images'))) // faire raccourci pour les images

// Security configuration
app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    
    res.setHeader(
    
    "Access-Control-Allow-Headers",
    
    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    
    );
    
    res.setHeader(
    
    "Access-Control-Allow-Methods",
    
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    
    );
    
    next();
    
    });

// multer config
    const MIME_TYPE = {
        'image/png': 'png',
        'image/jpeg': 'jpg',
        'image/jpg': 'jpg'
       }
       const storage = multer.diskStorage({
        // destination
        destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
        error = null;
        }
        cb(null, 'backend/images/users')
        },
        filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + 
       extension;
        cb(null, imgName);
        }
       });

// Session Configuration (clé qui va générer le token)
    const secretKey = 'your-secret-key';
        app.use(session({
       secret: secretKey,
       }));

// "MODELS" Importation
const Match = require("./models/match");
const User = require("./models/user");
const player = require("./models/player");
const Team = require("./models/team");
const team = require("./models/team");

// Data simulation
let matchesTab = [
    {id: 1, scoreOne: 0, scoreTwo: 2, teamOne: "fcb", teamTwo: "Rm"},
    {id: 2, scoreOne: 1, scoreTwo: 1, teamOne: "Css", teamTwo: "ca"},
    {id: 3, scoreOne: 2, scoreTwo: 0, teamOne: "est", teamTwo: "ess"}
]

// ********************************************************************************************
// business logic : get all matches
app.get("/api/matches", (req, res)=>{
    console.log("here into BL: get all matches");
    Match.find().then((docs)=> {
        // console.log("here documents from matches collections", docs);
        res.json({matches: docs});
    });
});

// business logic : Get Match By Id
app.get("/api/matches/:id", (req, res)=>{
    //  pour recuperer haja ml path coté B.E ==> "req.params."
    console.log("here into BL : Get Match By Id", req.params.id);
 
    // let findedMatch = {}
    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchesTab[i].id == req.params.id) {
    //         findedMatch = matchesTab[i];
    //         break;
    //     }
    // }
    // res.json({match : findedMatch}) 
    
    // let findedMatch = matchesTab.find((obj) => {
    //     return obj.id == req.params.id;
    // })
    Match.findOne({_id: req.params.id}).then((doc) => {
        res.json({match : doc});
    })
})

// business logic : Delete Match By ID
app.delete("/api/matches/:id", (req, res)=>{
    console.log("here into BL : Delete Match By Id", req.params.id);
    Match.deleteOne({_id: req.params.id}).then( (response) => {
        response.deletedCount ?
        res.json({msg: "Delete with success"}) :
        res.json({msg: "Error"});
    })
    // let x = false;
    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchesTab[i].id == req.params.id){
    //         matchesTab.splice(i,1); 
    //         x = true;
    //         break;
    //     }        
    // }

    // if(x)
    // {
    //     res.json({msg: "Deleted with success", matchesTab});
    // }else {
    //     res.json({msg: "ID n'existe pas"})
    // }
})

// business logic : Add Match
app.post("/api/matches", (req, res)=>{
        // pour recuperer l'objet ==> "req.body"
    console.log("here into BL : Add Match", req.body);
    // matchesTab.push(req.body);
    // res.json({msg: "added with success"})
    const x = new Match(req.body);
    x.save();
    res.json({msg : "Added with success"});

})

// business logic : update Match
app.put("/api/matches", (req, res)=>{
    console.log("here into BL : update Match", req.body);
    // updateOne prend en parametres ({critere de recherche}, new Obj)
    Match.updateOne({_id: req.body}, req.body).then((response) => {
        // console.log("here response after editing", response);
        response.nModified ?
            res.json({isUpddated : true}) :
            res.json({isUpddated : false});
    });

    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchesTab[i].id == req.body.id) {
    //         matchesTab[i] = req.body;
    //         break;
    //     }
    // }
    // res.json({isUpdated: true});
})

// ************************************************************************************************
//business logic : signup
app.post("/api/users/signup", multer({ storage: storage }).single('img'), (req, res) => {
    console.log("Here into BL: Signup", req.body);
    // .hash prend en parametre (attribut, complexité)
    bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
     console.log("Here crypted PWD", cryptedPwd);
     req.body.pwd = cryptedPwd;
     req.body.avatar =`http://localhost:3000/files/${req.file.filename}`;
     console.log("here final body", req.body);
     const user = new User(req.body);
        user.save((err, doc)=>{
            console.log("here error", err);
            console.log("here doc", doc);
            if (doc) {
                res.json({ msg: 0});
            } else {
                if (err.errors.email) {
                res.json({ msg: 1});
                }
            }
        })
    })
});



//business logic : login
// 0 = check email
// 1 = check pwd
// 2 = welcome
app.post("/api/users/login", (req, res) => {
    console.log("here into BL: login", req.body);
    let user;
    User.findOne({email: req.body.email}).then((findedUser) => {
        console.log("here response after search by email", findedUser);
        if (!findedUser) {
            res.json({msg: "0"});
        } else{
            user = findedUser;
            //compare pwd with crypted pwd
            return (bcrypt.compare(req.body.pwd, findedUser.pwd));//bcrypt pwd with crypted pwd
        }
    })
    .then((compareResult) => {
        console.log("compareResult", compareResult);
        if(!compareResult){
            res.json({msg : "1"});
        }else{
            let userToSend = {
                name : user.Name,
                // fName: user.firstName,
                // lName: user.lastName,
                role: user.role,
                id: user._id,
            };
        // jwt.sign(info du user , secretKey, duré de vie du token) pour la création du token
            const token = jwt.sign(userToSend, secretKey, { expiresIn:'1h' });

            res.json({msg : "2", token: token});
            // res.json({msg : "2", userToSend: userToSend});
        }
    })    
    });

// business logic : get all users
app.get("/api/users", (req, res)=>{
    console.log("here into BL: get all users");
    User.find().then((docs)=> {
        // console.log("here documents from matches collections", docs);
        res.json({users: docs});
    });
});

// business logic : get user by ID
app.get("/api/users/:id", (req, res)=>{
    //  pour recuperer haja ml path coté B.E ==> "req.params."
    console.log("here into BL : Get user By Id", req.params.id);
    User.findOne({_id: req.params.id}).then((doc) => {
        res.json({user : doc});
    })
});

// business logic : update User Profile
app.put("/api/users", (req, res)=>{
    console.log("here into BL : update user profile", req.body);
    User.updateOne({_id: req.body._id}, req.body).then((response) => {
        // console.log("here response after editing", response);
        response.nModified ?
            res.json({isUpddated : true}) :
            res.json({isUpddated : false});
    });

    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchesTab[i].id == req.body.id) {
    //         matchesTab[i] = req.body;
    //         break;
    //     }
    // }
    // res.json({isUpdated: true});
})


// function weatherApi() {
//     axios.get(
//         "https://api.openweathermap.org/data/2.5/weather?lat=36.84&lon=10.20&appid=19f12a143e90fab0dc9736397e8c9821"
//     ).then ((res)=>{
//         console.log(res);
//     }).catch((err)=> console.log(err));
    
// }
// weatherApi()

///////////////  Back-END "PLAYERS" //////////////////////////////////////////////////////////////////

// business logic : Add player
app.post("/api/players",  (req, res)=>{
    console.log("here into BL : Add Player", req.body);
    req.body.avatar =`http://localhost:3000/files/${req.file.filename}`;
    const x = new player(req.body);
    x.save((err, doc)=>{
        if (doc) {
            res.json({msg : "Added with success"});
        } else {
            res.json({msg : "Error"});
        }
    });
    
    })

// business logic : get all players
app.get("/api/players", (req, res)=>{
    console.log("here into BL : get all players");
    player.find().populate("team_id").then((docs)=>{
        res.json({x: docs})
    })
})

// business logic : Get player By Id
app.get("/api/players/:id", (req, res)=>{
    console.log("here into BL  : get player by ID", req.params.id);
    player.findOne({_id: req.params.id}).then((docs)=> {
        res.json({x: docs})
    })
})

// business logic : Delete player By ID
app.delete("/api/players/:id", (req, res)=>{
    console.log("here into BL : delete player by ID", req.params.id);
    player.deleteOne({_id: req.params.id}).then((response)=>{
        response.deletedCount ?
        res.json("delete player with success") :
        res.json("ERROR 404")
    })
})

// business logic : update player
app.put("/api/players", (req, res)=>{
    console.log("here into BL: update players", req.body);
    player.updateOne({_id: req.body}, req.body).then((response)=>{
        response.nModified ?
        res.json({isUpddated : true}) :
        res.json({isUpddated : false});
    })
})


///////////////  Back-END "TEAMS" //////////////////////////////////////////////////////////////////

// business logic : Add Team
app.post("/api/teams", (req, res)=>{
console.log("here into BL : Add Team", req.body);
const x = new Team(req.body);
x.save();
res.json({msg : "Added with success"});
})

// business logic : get all Team
app.get("/api/teams", (req, res)=> {
    console.log("here into BL : get all teams");
    Team.find().then((docs)=>{
        res.json({
            x: docs
        })
    })
})

// business logic : get all Team players (teamID)
app.post("/api/searchTeamPlayers", (req,res)=>{
    console.log("here into BL : get all Team players", req.body);
    try {
        team.findById(req.body.tId)
            .populate("players")
            .then((team)=>{
                console.log("here founded team", team);
                res.json({team: team});
            })
    } catch (error) {
        console.log("ERROR", error);
        res.status(500).json({msg: error})
        
    }
});
// ********************************************************************************************

// make app importable from another files
module.exports = app;

