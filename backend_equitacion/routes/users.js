const express = require("express");

const db = require("../database/mysql");

const router = express.Router();

router.get("/", (req, res) => {
  const query = "SELECT * FROM users_equitacion";

  db.query(query, (err, results) => {
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { user, password } = req.body;

  console.log(user, password);

  const query = "INSERT INTO users_equitacion SET ?";

  const newUser = {
    user,
    password,
  };

  db.query(query, newUser, (err, result) => {
    res.status(201).json({ message: "Usuario Registrado exitosamente" });
  });
});

module.exports = router;
