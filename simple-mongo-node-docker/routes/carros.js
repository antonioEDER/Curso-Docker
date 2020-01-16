const express = require('express');
const router = express.Router();

const Carro = require('../models/Carro');

router.post('/novo', (req, res) => {
  const novoCarro = new Carro({
    marca: req.body.marca,
    modelo: req.body.modelo
  });

  novoCarro
    .save()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;