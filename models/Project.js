
const mongoose = require("mongoose");


var projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }

  
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("nuevoproyectos", projectSchema);


