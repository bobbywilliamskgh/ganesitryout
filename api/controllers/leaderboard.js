const handleLeaderboardGet = (req, res, db) => {
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

module.exports = {
  handleLeaderboardGet: handleLeaderboardGet,
};
