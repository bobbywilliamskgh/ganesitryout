const handleResultPost = (req, res, db) => {
  const { userId, tryoutId, twkScore, tiuScore, tkpScore, totalScore, isPassed } = req.body;
  db.insert({
    user_id: userId,
    tryout_id: tryoutId,
    twk_score: twkScore,
    tiu_score: tiuScore,
    tkp_score: tkpScore,
    total_score: totalScore,
    is_passed: isPassed,
  })
    .into("results")
    .then((data) => {
      if (data) {
        res.json("success");
      } else {
        res.status(400).json("unable to submit result");
      }
    })
    .catch((err) => res.status(400).json("error, unable to submit result"));
};

const handleResultGet = (req, res, db) => {
  const { userId } = req.params;
  console.log("userId", userId);
  if (!req.userId) return res.json({ message: "unauthenticated!" });
  db.select("user_id")
    .from("results")
    .where("user_id", userId)
    .then((user) => {
      console.log(user);
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("not found");
      }
    })
    .catch((err) => res.status(400).json("error getting result"));
};

module.exports = {
  handleResultPost: handleResultPost,
  handleResultGet: handleResultGet,
};
