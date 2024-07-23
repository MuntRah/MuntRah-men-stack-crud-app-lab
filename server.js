// database
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");

require("./config/database");

const Car = require("./models/car.js");

const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//other things
app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.get("/cars/add", async (req, res) => {
  res.render("cars/add.ejs");
});

const carCtrl = require("./controllers/cars");

app.get("/", carCtrl.home);
app.get("/cars/new", carCtrl.New);
app.post("/cars", carCtrl.create);
app.get("/cars", carCtrl.index);
app.get("/cars/:carsId", carCtrl.show);
app.delete("/cars/:carsId", carCtrl.Delete);
app.get("/cars/:carsId/edit", carCtrl.edit);
app.put("/cars/:carsId", carCtrl.update);

app.listen(3000, () => {
  console.log("The express app is ready!");
});
