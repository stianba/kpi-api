const express = require("express");
const { findOne, show, create } = require("../controllers/teams");

const teams = express();

teams.param("teamId", findOne);
teams.get("/:teamId", show);
teams.post("/", create);

module.exports = teams;
