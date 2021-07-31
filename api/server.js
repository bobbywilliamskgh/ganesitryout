const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const knex = require("knex");
const register = require("./controllers/register");
const signin = require("./controllers/signin");
const info = require("./controllers/info");
const result = require("./controllers/result");
const leaderboard = require("./controllers/leaderboard");
const participant = require("./controllers/participant");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "bobbywilliamskgh",
    password: "Lambogini123",
    database: "ganesitryout",
  },
});

//console.log(postgres.select().from("users"));

// const server = http.createServer((request, response) => {
//   //console.log("header", request.headers);
//   // console.log("method", request.method);
//   // console.log("url", request.url);
//   // const user = {
//   //   name: "bobby",
//   //   age: "20",
//   // };
//   // response.setHeader("Content-Type", "application/json");
//   // response.end(JSON.stringify(user));
// });
// server.listen(3000);

const app = express();
app.use(express.json());
app.use(cors());

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

//  app.get("/:id", (req, res) => {
//    console.log(req.query);
//   console.log(req.headers);
//   console.log(req.body);
//   console.log(req.params);
//   res.status(404).send("not found");
// });

// app.get("/profile", (req, res) => {
//   res.send("Helooooo in profile");
// });

// app.post("/profile", (req, res) => {
//   console.log(req.body);
//   res.send("sucess");
// });

// Middleware Concept
// app.use((req, res, next) => {
//   console.log("<h1>Hellooooo</h1>");
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Testt");
// });

// app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.json("success");
});

app.post("/signin", (req, res) => {
  signin.handleSignin(req, res, db, bcrypt);
});

app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

app.get("/info/:id", (req, res) => {
  info.handleInfoGet(req, res, db);
});

app.post("/results", (req, res) => {
  result.handleResultPost(req, res, db);
});

app.get("/leaderboard/:tryoutId", (req, res) => {
  leaderboard.handleLeaderboardGet(req, res, db);
});

app.get("/results/:userId", (req, res) => {
  result.handleResultGet(req, res, db);
});

app.get("/participants/:email", (req, res) => {
  participant.handleParticipantGet(req, res, db);
});

app.listen(8800, () => {
  console.log("Backend server is running");
});

// PLANNING API

/*
    / -> GET , return "this is working"
    /signin -> POST, return success / fail
    /register -> POST, return success / fail
    /info:userId -> GET, return info user
    /results -> POST, return success / fail 
*/
