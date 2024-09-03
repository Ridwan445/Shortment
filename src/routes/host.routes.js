const express = require('express');
const router = express.Router();
const { createProperty } = require('../controllers/host.controllers');  
const { hostMiddleware } = require('../middlewares/auth');

router.post('/properties', hostMiddleware, createProperty);

module.exports = router;