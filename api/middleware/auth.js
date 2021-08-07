const { response } = require("express");
const jwt = require("jsonwebtoken");
// const ErrorResponse = require("../utils/errorResponse");
// const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    // return next(new ErrorResponse("Not authorized to access this route", 401));
    return res.status(401).json({
      success: false,
      error: "Not authorized to access this route",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // const user = await User.findById(decoded.id);

    // if (!user) {
    //   return next(new ErrorResponse("No user found with this id", 404));
    // }
    req.userId = decoded.id;

    // req.user = user;

    next();
  } catch (err) {
    // return next(new ErrorResponse("Not authorized to access this router", 401));
    console.log("catch error authMiddleware");
    return res.status(401).json({
      success: false,
      error: "Not authorized to access this router",
    });
  }
};

// const jwt = require("jsonwebtoken");

// authJwt = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];

//     let decodedData;

//     if (token) {
//       decodedData = jwt.verify(token, process.env.SECRET_KEY);
//       req.userId = decodedData?.id;
//     }

//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = {
//   authJwt: this.authJwt,
// };
