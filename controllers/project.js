exports.create = (req, res) => res.json(req.body);

exports.findOne = (req, res, next, id) => {
  req.project = id;
  next();
};

exports.show = (req, res) => res.json({ projectId: req.project });
