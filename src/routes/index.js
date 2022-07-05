const express = require("express");
const BoookController = require("../controllers/book.controller")
const routes = express.Router();

routes.post(
  "/book",
  BoookController.create
);

module.exports = routes;
