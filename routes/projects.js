const express = require("express");
const {
  findOne,
  show,
  list,
  create,
  createKpi,
  deleteKpi,
  createSession,
  deleteSession
} = require("../controllers/projects");

const projects = express();

projects.param("projectId", findOne);
projects.get("/", list);
projects.post("/", create);
projects.get("/:projectId", show);
projects.post("/:projectId/kpis", createKpi);
projects.delete("/:projectId/kpis/:kpi", deleteKpi);
projects.post("/:projectId/sessions", createSession);
projects.delete("/:projectId/sessions/:session", deleteSession);

module.exports = projects;
