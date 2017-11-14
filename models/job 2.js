const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//Need to change values back to true and or add default values
const jobSchema = new Schema({
  crew: { type: String, required: true, },
  date: { type: Date, required: true, },
  jobName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  estimatedJobTime: { type: String, required: true },
  actualJobTime: { type: String, default: "" },
  jobDescription: { type: String, required: true },
  jobNotes: { type: String, default: "" },
  completed: { type: Boolean, default: false }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;