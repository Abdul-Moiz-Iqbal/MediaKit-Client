const { google } = require('googleapis');

// Create OAuth2 client
const oauth2Client = new google.auth.OAuth2({
  clientId: '162685795653-069gdtre7qjd6nc9l8c5rb1nglcht6j5.apps.googleusercontent.com',
  clientSecret: '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',
  redirectUri: 'YOUR_REDIRECT_URI', // Optional for server-side apps
});

// Authenticate with OAuth2 credentials (token retrieved from frontend)
const authenticateWithToken = async (accessToken) => {
  oauth2Client.setCredentials({ access_token: accessToken });
};

// Load the YouTube Analytics API
const loadYouTubeAnalyticsAPI = async () => {
  const youtubeAnalytics = google.youtubeAnalytics({
    version: 'v2',
    auth: oauth2Client,
  });
  return youtubeAnalytics;
};

// Execute YouTube Analytics API request
const executeAnalyticsQuery = async (startDate, endDate) => {
  try {
    const youtubeAnalytics = await loadYouTubeAnalyticsAPI();
    const response = await youtubeAnalytics.reports.query({
      ids: 'channel==MINE',
      startDate: startDate,
      endDate: endDate,
      metrics: 'views,estimatedMinutesWatched,averageViewDuration,averageViewPercentage,subscribersGained',
      dimensions: 'day',
      sort: 'day',
    });
    return response.data;
  } catch (err) {
    console.error('Error executing YouTube Analytics query:', err);
    throw err;
  }
};

module.exports = {
  authenticateWithToken,
  executeAnalyticsQuery,
};
