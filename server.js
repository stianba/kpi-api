const express = require("express");
const bodyParser = require("body-parser");
const projects = require("./routes/projects");

require("dotenv").load();

const port = process.env.PORT || 1337;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/projects", projects);

app.get("/", (req, res) =>
  res.json({ welcome: "Welcome to the KPI API.", version: "0.0.1" })
);

app.listen(port);
