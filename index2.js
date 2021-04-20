const express = require("express");
const ExpressApp = express();
const joi = require("@hapi/joi");
ExpressApp.use(express.json());
const list = [
  { id: 1, name: "Zain" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Raza" },
  { id: 4, name: "Ahmad" },
  { id: 5, name: "Aslam" },
];

ExpressApp.listen(3000, () => {
  console.log("Listening on Port 3000");
});

ExpressApp.get("/", (req, res) => {
  res.send(list);
});

ExpressApp.get("/:id", (req, res) => {
  const obj = list.find((c) => c.id == req.params.id);
  if (!obj) res.status(402).send("NOT FOUND");
  res.send(obj);
});

ExpressApp.post("/", (req, res) => {
  const schema = {
    name: joi.string().min(3).required(),
  };
  const result = joi.validate(req.body, schema);
  console.log(result);
  if (result.error) {
    res.status(402).send("Name should be greater than 3");
    return;
  }
  const student = {
    id: list.length + 1,
    name: req.body.name,
  };
  list.push(student);
  console.log(student.name);
  res.send(student);
});

ExpressApp.delete("/", (req, resp) => {});
