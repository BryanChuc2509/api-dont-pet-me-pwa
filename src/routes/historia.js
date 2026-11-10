const express = require('express');
const historia = require('../data/historia');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(historia);
});

module.exports = router;
