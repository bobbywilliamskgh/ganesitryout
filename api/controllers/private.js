const { db } = require("../config/db");

exports.getHomeRoute = (req, res, next) => {
  res.status(200).json({
    success: true,
    id: req.userId,
    data: "You got access to the private data in this route",
  });
};

exports.getUserInfoRoute = (req, res, next) => {
  const id = req.userId;
  console.log("id", id);
  db("users")
    .where("user_id", id)
    .then((users) => {
      const user = users[0];

      if (!user) {
        return res.status(400).json({
          success: false,
          user: {},
        });
      }
      console.log(user);
      res.status(200).json({
        success: true,
        user: user,
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        user: {},
      });
    });
};

exports.getParticipant = async (req, res, next) => {
  const { id } = req.params;
  try {
    // console.log("email", email);
    console.log("userId", id);
    console.log("get participants...");
    const users = await db.select("*").from("users").where("user_id", id);
    const user = users[0];
    console.log("user", user);
    if (!user) {
      console.log("user not found");
      return;
    }
    const email = user.email;
    const participants = await db.select("email").from("participants").where("email", email);
    const participant = participants[0];
    console.log("participant", participant);
    if (!participant) {
      return res.status(400).json({
        success: false,
        participant: participant,
      });
    }
    res.status(200).json({
      success: true,
      participant: participant,
    });
  } catch (error) {
    console.log("error participant");
    res.status(500).json({
      success: false,
      participant: participant,
    });
  }
};

exports.getResult = async (req, res, next) => {
  const { id } = req.params;
  console.log("userId", id);
  try {
    console.log("get results");
    const results = await db.select("*").from("results").where("user_id", id);
    const result = results[0];
    console.log("user result", result);
    if (!result) {
      console.log("result not found");
      return res.status(400).json({
        success: false,
        result: result,
      });
    }
    res.status(200).json({
      success: true,
      result: result,
    });
  } catch (error) {
    console.log("error get participant");
  }
};

exports.getLeaderboard = (req, res, next) => {
  const { tryoutId } = req.params;
  console.log(tryoutId);
  let passedUsers = [];
  let failedUsers = [];
  db.transaction((trx) => {
    trx
      .select(
        "users.user_id",
        "users.name",
        "users.provinsi",
        "results.twk_score",
        "results.tiu_score",
        "results.tkp_score",
        "results.total_score",
        "results.is_passed"
      )
      .from("users")
      .join("results", "users.user_id", "=", "results.user_id")
      .orderBy("results.total_score", "desc")
      .where("is_passed", false)
      .then((data) => {
        failedUsers = data;
        return trx
          .select(
            "users.user_id",
            "users.name",
            "users.provinsi",
            "results.twk_score",
            "results.tiu_score",
            "results.tkp_score",
            "results.total_score",
            "results.is_passed"
          )
          .from("users")
          .join("results", "users.user_id", "=", "results.user_id")
          .orderBy("results.total_score", "desc")
          .where("is_passed", true)
          .then((data) => {
            passedUsers = data;
            const users = passedUsers.concat(failedUsers);
            res.json(users);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json("unable to get leaderboard"));
};

exports.postResults = async (req, res, next) => {
  const { userId, tryoutId, twkScore, tiuScore, tkpScore, totalScore, isPassed } = req.body;
  try {
    const data = await db
      .insert({
        user_id: userId,
        tryout_id: tryoutId,
        twk_score: twkScore,
        tiu_score: tiuScore,
        tkp_score: tkpScore,
        total_score: totalScore,
        is_passed: isPassed,
      })
      .into("results")
      .returning("user_id");
    const id = data[0];
    console.log("insert result", id);
    if (!id) {
      console.log("unable to insert result");
      return;
    }
    res.status(200).json({
      success: true,
      userId: userId,
    });
  } catch (error) {
    res.status(400).json("error, unable to submit result");
  }
};
