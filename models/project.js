const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  kpis: [
    {
      title: { type: String, required: true },
      description: String,
      baseline: { value: Number, valueType: String }
    }
  ]
});

ProjectSchema.methods = {
  deleteKpi: async function(id) {
    try {
      this.kpis.id(id).remove();
      return await this.save();
    } catch (e) {
      return false;
    }
  }
};

mongoose.model("Project", ProjectSchema);
