const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//Need to change values back to true and or add default values
const crewSchema = new Schema({
  crewName: { type: String, required: false, },
});

const Crew = mongoose.model("Crew", crewSchema);

module.exports = Crew;