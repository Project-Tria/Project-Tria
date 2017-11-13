const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Jobs collection and inserts the jobs below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/jobslist",
  {
    useMongoClient: true
  }
);

const jobSeed = [
  {
    crew: "Crew 1",
    jobName: "Job 1",
    phoneNumber: "919111111",
    address: "1 1st street cary, nc",
    estimatedJobTime: "2",
    actualJobTime: "1.45",
    jobDescription: "Please do the first job",
    jobNotes: "notes about the 1st job",
    completed: false,
    date: new Date(Date.now())
  },
  {
    crew: "Crew 2",
    jobName: "Job 2",
    phoneNumber: "9192222222",
    address: "2 2st street cary, nc",
    estimatedJobTime: "2",
    actualJobTime: "1.45",
    jobDescription: "Please do the 2nd job",
    jobNotes: "notes about the 2nd job",
    completed: false,
    date: new Date(Date.now())
  },
  {
    crew: "Crew 3",
    jobName: "Job 3",
    phoneNumber: "919333333",
    address: "3 3rd street cary, nc",
    estimatedJobTime: "2",
    actualJobTime: "1.45",
    jobDescription: "Please do the 3rd job",
    jobNotes: "notes about the 3rd job",
    completed: false,
    date: new Date(Date.now())
  }
];

db.Job
  .remove({})
  .then(() => db.Job.collection.insertMany(jobSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });