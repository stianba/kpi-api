const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

mongoose.model("Team", TeamSchema);
