const express = require("express");
const router = express.Router();
const { getHomeRoute, getUserInfoRoute, getParticipant, getResult, getLeaderboard, postResults } = require("../controllers/private");
const { protect } = require("../middleware/auth");

router.route("/").get(protect, getHomeRoute);
router.route("/info").get(protect, getUserInfoRoute);
router.route("/participants/:id").get(protect, getParticipant);
router.route("/results/:userId/:tryoutId").get(protect, getResult);
router.route("/leaderboard/:tryoutId").get(protect, getLeaderboard);
router.route("/results").post(protect, postResults);

module.exports = router;
