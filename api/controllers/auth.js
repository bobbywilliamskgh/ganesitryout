const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { db } = require("../config/db");

const sendToken = (user, statusCode, res) => {
  const token = jwt.sign({ id: user.user_id }, process.env.SECRET_KEY, {
    expiresIn: "10h",
  });
  res.status(statusCode).json({ success: true, token });
};

exports.register = (req, res, next) => {
  const { name, provinsi, email, password } = req.body;
  console.log("req.body", req.body);
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  db.transaction((trx) => {
    trx
      .insert({
        hash: hash,
        email: email,
      })
      .into("login")
      .returning("email")
      .then((loginEmail) => {
        console.log("loginEmail", loginEmail);
        return trx("users")
          .returning("*")
          .insert({
            name: name,
            provinsi: provinsi,
            email: loginEmail[0],
            joined: new Date(),
          })
          .then((users) => {
            const user = users[0];
            sendToken(user, 201, res);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => {
    console.log("error register", err);
    res.status(400).json("unable to register");
  });
};

exports.login = (req, res, next) => {
  // check if email or password is provided
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      sucess: false,
      message: "Email atau password tidak boleh kosong",
    });
  }
  db.select("hash", "email")
    .from("login")
    .where("email", email)
    .then((data) => {
      console.log("user tidak exist");
      console.log(data);
      // check that user exist by email
      if (!data[0]) {
        return res.status(401).json({
          sucess: false,
          message: "Email atau password tidak valid!",
        });
      }
      const isValid = bcrypt.compareSync(password, data[0].hash);
      console.log(isValid);

      // check that password match
      if (!isValid) {
        return res.status(401).json({
          sucess: false,
          message: "Email atau password tidak valid!",
        });
      }
      db.select("*")
        .from("users")
        .where("email", email)
        .then((users) => {
          const user = users[0];
          console.log("USERRRRR");
          console.log("user", user);
          sendToken(user, 200, res);
        })
        .catch((err) => {
          return res.status(400).json({
            sucess: false,
            message: "Terjadi kesalahan",
          });
        });
    })
    .catch((err) => {
      res.status(500).json({ success: false, message: "Terjadi kesalahan" });
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
