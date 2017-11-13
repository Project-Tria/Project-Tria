const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//Need to change values back to true and or add default values
const jobSchema = new Schema({
  crew: { type: String, required: true },
  date: { type: String, required: false },
  jobName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  estimatedJobTime: { type: String, required: true },
  actualJobTime: { type: String, required: false },
  jobDescription: { type: String, required: true },
  jobNotes: { type: String, required: false },
  completed: { type: Boolean, required: false }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;