const express = require("express");
const {
  findOne,
  show,
  create,
  deleteKpi,
  deleteSession
} = require("../controllers/projects");

const projects = express();

projects.param("projectId", findOne);
projects.get("/:projectId", show);
projects.post("/", create);
projects.delete("/:projectId/kpis/:kpi", deleteKpi);
projects.delete("/:projectId/sessions/:session", deleteSession);

module.exports = projects;
