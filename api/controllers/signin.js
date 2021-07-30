const handleSignin = (req, res, db, bcrypt) => {
  // Load hash from your password DB.
  db.select("hash", "email")
    .from("login")
    .where("email", req.body.email)
    .then((data) => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      console.log(isValid);
      if (isValid) {
        db.select("*")
          .from("users")
          .where("email", req.body.email)
          .then((user) => {
            res.json(user[0]);
          })
          .catch((err) => {
            res.status(400).json("uneble getting user");
          });
      } else {
        res.status(400).json("wrong credential");
      }
    })
    .catch((err) => {
      res.status(400).json("wrong credential");
    });

  // const loginUser = database.login.find((user) => user.email === req.email);
  // bcrypt.compare(req.body.password, loginUser.hash, function (err, result) {
  //   if (result == true) {
  //     // res.json("success");
  //     const user = {
  //       name: req.body.email,
  //       password: req.body.password,
  //     };
  //     res.json(database.users[0]); // contoh
  //   } else if (result == false) {
  //     res.status(400).json("Gagal login");
  //   }
  // });
  // if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
  //   res.json("success");
  // } else {
  //   res.status(400).json("Gagal login");
  // }
};

module.exports = {
  handleSignin: handleSignin,
};
