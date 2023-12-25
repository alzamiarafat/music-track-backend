'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers');


router.get('/music', controller.MusicController.index)
router.get('/', (req, res) => {
    console.log("🚀 ~ file: route.js:9 ~ router.get ~ res:", res)
    res.send(':)');
});

module.exports = router;
