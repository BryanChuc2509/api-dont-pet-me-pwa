const express = require('express');
const niveles = require('../data/niveles');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(niveles);
});

module.exports = router;
