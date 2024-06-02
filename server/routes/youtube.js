const express = require('express');
const router = express.Router();
const youtube = require('../controller/youtube');

// Define routes
router.get('/youtube', youtube.login);
router.get('/youtube/oauth2callback', youtube.oauth2callback);

module.exports = router;