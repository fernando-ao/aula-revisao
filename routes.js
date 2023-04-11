const express = require("express");
const routes = express.Router();

module.exports = routes;


const list = [
  {
    "id": 1,
    "fname": "João", 
    "age": 20
  }, 
  {
    "id": 2,
    "fname": "Fernando", 
    "age": 22
  }, 
  {
    "id": 3,
    "fname": "Maria", 
    "age": 21
  }
];

routes.get("/", (req, res) => {
  res.status(200).json(list);
});
