const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//Need to change values back to true and or add default values
const jobSchema = new Schema({
  crewMembers: { type: String, required: false, },
  crewName: { type: String, required: false, },
  jobDate: { type: Date, required: false, },
  jobName: { type: String, required: false },
  custPhone: { type: String, required: false },
  custAddress: { type: String, required: false },
  estimatedJobTime: { type: String, required: false },
  actualJobTime: { type: String, default: "" },
  jobDescription: { type: String, required: false },
  jobNotes: { type: String, default: "" },
  completed: { type: Boolean, default: false }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;