import axios from "axios";

export default {
  // Gets all jobs
  getJobs: function() {
    return axios.get("/api/jobs");
  },
  // Gets the job with the given id
  getJob: function(id) {
    return axios.get("/api/jobs/" + id);
  },
  // Deletes the job with the given id
  deleteJob: function(id) {
    return axios.delete("/api/jobs/" + id);
  },
  // Saves a job to the database
  saveJob: function(jobData) {
    return axios.post("/api/jobs", jobData);
  },
    // Gets all crews
  getCrews: function() {
    return axios.get("/api/crews");
  },
  // Gets the Crew with the given id
  getCrew: function(id) {
    return axios.get("/api/crews/" + id);
  },
  // Deletes the Crew with the given id
  deleteCrew: function(id) {
    return axios.delete("/api/crews/" + id);
  },
  // Saves a Crew to the database
  saveCrew: function(crewData) {
    return axios.post("/api/crews", crewData);
  }
};