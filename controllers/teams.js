const mongoose = require("mongoose");
const Team = mongoose.model("Team");

exports.findOne = async (req, res, next, id) => {
  const team = await Team.findById(id).exec();
  res.team = team;
  next();
};

exports.show = (req, res) => res.json(res.team);

exports.create = async (req, res) => {
  const team = new Team(req.body);
  const dbSavedTeam = await team.save();
  return res.json({
    responseCode: 0,
    message: "Team created.",
    teamId: dbSavedTeam._id
  });
};
