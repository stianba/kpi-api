const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").load();

mongoose.connect("mongodb://localhost/kpi");

// Bootstrap models
require("./models/team");
require("./models/project");

// Routes
const teams = require("./routes/teams");
const projects = require("./routes/projects");

const port = process.env.PORT || 1337;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/teams", teams);
app.use("/projects", projects);

app.get("/", (req, res) =>
  res.json({ welcome: "Welcome to the KPI API.", version: "0.0.1" })
);

app.listen(port);
