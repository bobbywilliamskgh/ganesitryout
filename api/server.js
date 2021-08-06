require("dotenv").config();
const express = require("express");

const cors = require("cors");

// const info = require("./controllers/info");
// const result = require("./controllers/result");
// const leaderboard = require("./controllers/leaderboard");
// const participant = require("./controllers/participant");
// const authController = require("./controllers/auth");
// const authJwt = require("./middleware/authJwt");

// Production
// const db = knex({
//   client: "pg",
//   connection: {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//   },
// });

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

app.get("/api", (req, res) => {
  res.json("success");
  console.log("sucess");
});

// router.use((req, res, next) => {
//   res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
//   next();
// });

// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

// router.post("/api/auth/signin", (req, res) => {
//   authController.signin(req, res, db, bcrypt);
//   // signin.handleSignin(req, res, db, bcrypt);
// });

// router.post("/api/auth/register", (req, res) => {
//   authController.signup(req, res, db, bcrypt);
//   // register.handleRegister(req, res, db, bcrypt);
// });

// router.get(
//   "/api/info/:id",
//   (req, res, next) => {
//     authJwt.authJwt(req, res, next);
//   },
//   (req, res) => {
//     info.handleInfoGet(req, res, db);
//   }
// );

// router.post(
//   "/api/results",
//   (req, res, next) => {
//     authJwt.authJwt(req, res, next);
//   },
//   (req, res) => {
//     result.handleResultPost(req, res, db);
//   }
// );

// router.get(
//   "/api/leaderboard/:tryoutId",
//   (req, res, next) => {
//     authJwt.authJwt(req, res, next);
//   },
//   (req, res) => {
//     leaderboard.handleLeaderboardGet(req, res, db);
//   }
// );

// router.get(
//   "/api/results/:userId",
//   (req, res, next) => {
//     authJwt.authJwt(req, res, next);
//   },
//   (req, res) => {
//     result.handleResultGet(req, res, db);
//   }
// );

// router.get(
//   "/api/participants/:email",
//   (req, res, next) => {
//     authJwt.authJwt(req, res, next);
//   },
//   (req, res) => {
//     participant.handleParticipantGet(req, res, db);
//   }
// );

// Development
app.listen(process.env.PORT || 8800, () => {
  console.log("Backend server is running");
});

// Production
// app.listen(8800, () => {
//   console.log("Backend server is running");
// });

// PLANNING API

/*
    / -> GET , return "this is working"
    /signin -> POST, return success / fail
    /register -> POST, return success / fail
    /info:userId -> GET, return info user
    /results -> POST, return success / fail 
*/
