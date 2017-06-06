const mongoose = require("mongoose");
const Project = mongoose.model("Project");

exports.findOne = async (req, res, next, id) => {
  const project = await Project.findById(id).exec();
  req.project = project;
  return next();
};

exports.show = (req, res) => res.json({ projectId: req.project });

exports.create = async (req, res) => {
  const project = new Project(req.body);
  const dbSavedProject = await project.save();
  return res.json({
    responseCode: 0,
    message: "Project created.",
    teamId: dbSavedProject._id
  });
};

exports.deleteKpi = async (req, res) => {
  const response = await req.project.deleteKpi(req.params.kpi);
  return res.json(
    response
      ? {
          responseCode: 0,
          message: "KPI deleted."
        }
      : {
          responseCode: 1,
          message: "No KPI found with that ID."
        }
  );
};

exports.deleteSession = async (req, res) => {
  const response = await req.project.deleteSession(req.params.session);
  return res.json(
    response
      ? {
          responseCode: 0,
          message: "Session deleted."
        }
      : {
          responseCode: 1,
          message: "No session found with that ID."
        }
  );
};
