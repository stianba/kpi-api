const mongoose = require("mongoose");
const Project = mongoose.model("Project");

exports.findOne = async (req, res, next, id) => {
  const project = await Project.findById(id).exec();
  req.project = project;
  return next();
};

exports.list = async (req, res) => {
  const projects = await Project.find();
  return res.json(projects);
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

exports.createKpi = async (req, res) => {
  const response = req.project.createKpi(req.body);
  return res.json(response);
};

exports.deleteKpi = async (req, res) => {
  const response = await req.project.deleteKpi(req.params.kpi);
  return res.json(response);
};

exports.createSession = async (req, res) => {
  const response = req.project.createSession(req.body);
  return res.json(response);
};

exports.deleteSession = async (req, res) => {
  const response = await req.project.deleteSession(req.params.session);
  return res.json(response);
};
