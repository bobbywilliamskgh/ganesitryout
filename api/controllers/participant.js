const handleParticipantGet = (req, res, db) => {
  const { email } = req.params;
  console.log("email", email);
  db.select("email")
    .from("participants")
    .where("email", email)
    .then((participant) => {
      console.log(participant);
      if (participant.length) {
        res.json(participant[0]);
      } else {
        res.status(400).json("not found");
      }
    })
    .catch((err) => res.status(400).json("error getting participant"));
};

module.exports = {
  handleParticipantGet: handleParticipantGet,
};
