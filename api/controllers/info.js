const handleInfoGet = (req, res, db) => {
  const { id } = req.params;
  db("users")
    .where("user_id", id)
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("not found");
      }
    })
    .catch((err) => {
      res.status(400).json("error getting user");
    });
};

module.exports = {
  handleInfoGet: handleInfoGet,
};
