const express = require('express');
const personajes = require('../data/personajes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(personajes);
});

module.exports = router;
