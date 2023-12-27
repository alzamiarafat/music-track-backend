'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/musics', controller.MusicController.index);
router.post('/musics', controller.MusicController.create);
router.get('/musics/:id', controller.MusicController.show);

router.get('/', (req, res) => {
    res.send(':)');
});

module.exports = router;
