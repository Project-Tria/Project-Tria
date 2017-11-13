const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  crew: { type: String, required: true },
  date: { type: String, required: true },
  jobName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  estimatedJobTime: { type: String, required: true },
  actualJobTime: { type: String, required: true },
  jobDescription: { type: String, required: true },
  jobNotes: { type: String, required: true },
  completed: { type: Boolean, required: true }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;