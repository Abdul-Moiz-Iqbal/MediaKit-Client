const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); // Import cookie-parser module
dotenv.config()

const app = express();
const port = 8080;

const clientId = 'oq2nv5zjmpesfx5g5afww8wd5glyr7'; // Replace with your actual Client ID
const clientSecret = 'vzmoz9klapfah7mwrah363o5hx56yo'; // Replace with your actual Client Secret
const redirectUri = 'http://localhost:8080/twitch/callback';
const jwtSecret = process.env.JWT_SECRET_KEY; // Replace with your actual JWT secret

app.use(bodyParser.json());
app.use(cookieParser()); // Use cookie-parser middleware

function generateJwtToken(data) {
  return jwt.sign(data, jwtSecret, { expiresIn: '1h' });
}

function verifyJwtToken(token) {
  return jwt.verify(token, jwtSecret);
}

app.get('/auth', (req, res) => {
  const scope = 'analytics:read:games';
  const authUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
  res.redirect(authUrl);
});

app.get('/twitch/callback', async (req, res) => {
  const { code } = req.query;

  try {
    const tokenResponse = await axios.post(`https://id.twitch.tv/oauth2/token`, null, {
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri
      }
    });

    const { access_token, refresh_token, expires_in } = tokenResponse.data;
    const userResponse = await axios.get(`https://api.twitch.tv/helix/users`, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Client-Id': clientId
      }
    });

    const user = userResponse.data.data[0];
    const jwtToken = generateJwtToken({ access_token, refresh_token, expires_in, user });

    // Set the JWT token as a cookie
    res.cookie('jwtToken', jwtToken, { httpOnly: true }); // Set httpOnly to true for added security

    res.json({ jwtToken });
  } catch (error) {
    console.error('Error during callback:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Authentication failed' });
  }
});

app.get('/channel-insights', async (req, res) => {
  const jwtToken = req.cookies.jwtToken; // Retrieve JWT token from cookie

  try {
    const decoded = verifyJwtToken(jwtToken);
    const { access_token, user } = decoded;
    const broadcasterId = user.id;

    const insightsResponse = await axios.get(`https://api.twitch.tv/helix/analytics/reports?type=overview_v1&broadcaster_id=${broadcasterId}`, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Client-Id': clientId
      }
    });

    res.json(insightsResponse.data);
  } catch (error) {
    console.error('Error fetching channel insights:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch channel insights' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
