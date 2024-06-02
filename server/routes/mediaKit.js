const express = require('express');
const router = express.Router();
const youtubeAnalytics = require('../controller/mediakit');

// Handle POST request to execute YouTube Analytics query
router.post('/analytics', async (req, res) => {
  const { accessToken, startDate, endDate } = req.body;

  try {
    // Authenticate with the provided access token
    await youtubeAnalytics.authenticateWithToken(accessToken);

    // Execute YouTube Analytics query
    const analyticsData = await youtubeAnalytics.executeAnalyticsQuery(startDate, endDate);

    res.json(analyticsData);
  } catch (err) {
    console.error('Error fetching YouTube Analytics:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
