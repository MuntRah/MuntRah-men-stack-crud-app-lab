// controllers/cars.js

const Car = require("../models/car");

const home = async (req, res) => {
  res.render("index.ejs");
};

const New = (req, res) => {
  res.render("cars/add.ejs");
};

const create = async (req, res) => {
  await Car.create(req.body);
  res.redirect("/cars");
};

// Display all cars
const index = async (req, res) => {
  const foundCar = await Car.find();
  res.render("cars/index.ejs", { cars: foundCar });
};

const show = async (req, res, next) => {
  console.log("req.params: ", req.params);
  const car = await Car.findById(req.params.carsId);
  console.log("car: ", car);
  res.render("cars/show.ejs", { car });
};

const Delete = async (req, res, next) => {
  await Car.findByIdAndDelete(req.params.carsId);
  res.redirect("/cars");
};

const edit = async (req, res, next) => {
  const car = await Car.findById(req.params.carsId);
  res.render("cars/edit.ejs", { car });
};

const update = async (req, res, next) => {


  await Car.findByIdAndUpdate(req.params.carsId, req.body);
  res.redirect(`/cars/${req.params.carsId}`);
};

module.exports = {
  home,
  New,
  create,
  index,
  show,
  Delete,
  update,
  edit,
};
