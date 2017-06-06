const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  kpis: [
    {
      title: { type: String, required: true },
      description: String
    }
  ],
  sessions: [
    {
      title: { type: String, required: true },
      description: String,
      kpis: [
        {
          kpiId: { type: Schema.ObjectId, ref: "kpis" },
          data: { value: Number, valueType: String },
          comment: String,
          isBaseline: Boolean
        }
      ]
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
  },
  deleteSession: async function(id) {
    try {
      this.sessions.id(id).remove();
      return await this.save();
    } catch (e) {
      return false;
    }
  }
};

mongoose.model("Project", ProjectSchema);
