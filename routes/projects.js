const express = require("express");
const { findOne, show, create, deleteKpi } = require("../controllers/projects");

const projects = express();

projects.param("projectId", findOne);
projects.get("/:projectId", show);
projects.post("/", create);
projects.delete("/:projectId/kpis/:kpi", deleteKpi);

module.exports = projects;
