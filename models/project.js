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
          data: {
            value: { type: Number, required: true },
            valueType: { type: String, required: true }
          },
          comment: String,
          isBaseline: Boolean
        }
      ]
    }
  ]
});

ProjectSchema.methods = {
  createKpi: async function(data) {
    this.kpis.push(data);
    return await this.save();
  },
  deleteKpi: async function(id) {
    try {
      this.kpis.id(id).remove();
      return await this.save();
    } catch (e) {
      return false;
    }
  },
  createSession: async function(data) {
    this.sessions.push(data);
    return await this.save();
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
