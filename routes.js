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

routes.get("/:id", (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < list.length; i++) {
    if (id == list[i].id) {
      res.status(200).json(list[i]);
      return;
    }
  }
  res.status(404).send("Not Found");
});

routes.delete("/:id", (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < list.length; i++) {
    if (id == list[i].id) {
      list.splice(i, 1);
      res.status(200).send("OK");
      return;
    }
  }
  res.status(404).send("Not Found");
});
