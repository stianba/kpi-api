const express = require("express");
const { findOne, show, create } = require("../controllers/project");

const projects = express();

projects.param("projectId", findOne);
projects.get("/:projectId", show);
projects.post("/", create);

module.exports = projects;
