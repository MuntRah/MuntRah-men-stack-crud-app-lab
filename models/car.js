const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
  name: String,
  Color: String,
});
const Car = mongoose.model("car", carSchema);
module.exports = Car;
