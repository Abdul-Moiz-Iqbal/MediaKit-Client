const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const OAuth = require('oauth-1.0a');
const crypto = require('crypto');
const querystring = require('querystring');
const session = require('express-session');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const CALLBACK_URL = process.env.TWITTER_CALLBACK_URL;

const oauth = OAuth({
  consumer: {
    key: process.env.TWITTER_API_KEY,
    secret: process.env.TWITTER_API_SECRET_KEY,
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  },
});

app.use(session({
  secret: process.env.SESSION_SECRET || 'default_session_secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

let oauthToken = '';
let oauthTokenSecret = '';

// Step 1: Get a request token
app.get('/auth/twitter', async (req, res) => {
  const request_data = {
    url: 'https://api.twitter.com/oauth/request_token',
    method: 'POST',
    data: { oauth_callback: CALLBACK_URL },
  };

  const headers = oauth.toHeader(oauth.authorize(request_data));

  try {
    const response = await axios.post(request_data.url, querystring.stringify(request_data.data), {
      headers: {
        ...headers,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      }
    });

    const params = new URLSearchParams(response.data);
    oauthToken = params.get('oauth_token');
    oauthTokenSecret = params.get('oauth_token_secret');

    res.redirect(`https://api.twitter.com/oauth/authorize?oauth_token=${oauthToken}`);
  } catch (error) {
    console.error('Error getting request token:', error);
    res.status(500).send('Error getting request token');
  }
});

// Step 2: Handle callback and get access token
app.get('/callback', async (req, res) => {
  const { oauth_verifier } = req.query;
  const request_data = {
    url: 'https://api.twitter.com/oauth/access_token',
    method: 'POST',
    data: { oauth_verifier, oauth_token: oauthToken },
  };

  const headers = oauth.toHeader(oauth.authorize(request_data, { key: oauthToken, secret: oauthTokenSecret }));

  try {
    const response = await axios.post(request_data.url, querystring.stringify(request_data.data), {
      headers: {
        ...headers,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      }
    });

    const params = new URLSearchParams(response.data);
    const accessToken = params.get('oauth_token');
    const accessTokenSecret = params.get('oauth_token_secret');
    const userId = params.get('user_id');
    const screenName = params.get('screen_name');

    // Store these tokens in the session and use them for further API requests
    req.session.accessToken = accessToken;
    req.session.accessTokenSecret = accessTokenSecret;

    res.send(`Authentication successful! User ID: ${userId}, Screen Name: ${screenName}`);
  } catch (error) {
    console.error('Error getting access token:', error);
    res.status(500).send('Error getting access token');
  }
});

// Step 3: Get Twitter user info
app.get('/twitter-user-info', async (req, res) => {
  const accessToken = req.session.accessToken;
  const accessTokenSecret = req.session.accessTokenSecret;

  if (!accessToken || !accessTokenSecret) {
    return res.status(400).send('User not authenticated');
  }

  const url = 'https://api.twitter.com/1.1/account/verify_credentials.json';
  const request_data = {
    url,
    method: 'GET',
  };

  const headers = oauth.toHeader(oauth.authorize(request_data, { key: accessToken, secret: accessTokenSecret }));

  try {
    const response = await axios.get(url, {
      headers: {
        ...headers,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching user info:', error.response ? error.response.data : error);
    res.status(500).send('Error fetching user info');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// working code 
// I am getting bakc user id etc (but not insights)
// const express = require('express');
// const axios = require('axios');
// const dotenv = require('dotenv');
// const OAuth = require('oauth-1.0a');
// const crypto = require('crypto');
// const querystring = require('querystring');
// const session = require('express-session');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;
// const CALLBACK_URL = process.env.TWITTER_CALLBACK_URL;

// const oauth = OAuth({
//   consumer: {
//     key: process.env.TWITTER_API_KEY,
//     secret: process.env.TWITTER_API_SECRET_KEY,
//   },
//   signature_method: 'HMAC-SHA1',
//   hash_function(base_string, key) {
//     return crypto.createHmac('sha1', key).update(base_string).digest('base64');
//   },
// });

// app.use(session({
//   secret: process.env.SESSION_SECRET || 'default_session_secret',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false } // Set to true if using HTTPS
// }));

// let oauthToken = '';
// let oauthTokenSecret = '';

// // Step 1: Get a request token
// app.get('/auth/twitter', async (req, res) => {
//   const request_data = {
//     url: 'https://api.twitter.com/oauth/request_token',
//     method: 'POST',
//     data: { oauth_callback: CALLBACK_URL },
//   };

//   const headers = oauth.toHeader(oauth.authorize(request_data));

//   try {
//     const response = await axios.post(request_data.url, querystring.stringify(request_data.data), { headers: {
//       ...headers,
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Accept': 'application/json',
//     }});

//     const params = new URLSearchParams(response.data);
//     oauthToken = params.get('oauth_token');
//     oauthTokenSecret = params.get('oauth_token_secret');

//     res.redirect(`https://api.twitter.com/oauth/authorize?oauth_token=${oauthToken}`);
//   } catch (error) {
//     console.error('Error getting request token:', error);
//     res.status(500).send('Error getting request token');
//   }
// });

// // Step 2: Handle callback and get access token
// app.get('/callback', async (req, res) => {
//   const { oauth_verifier } = req.query;
//   const request_data = {
//     url: 'https://api.twitter.com/oauth/access_token',
//     method: 'POST',
//     data: { oauth_verifier, oauth_token: oauthToken },
//   };

//   const headers = oauth.toHeader(oauth.authorize(request_data, { key: oauthToken, secret: oauthTokenSecret }));

//   try {
//     const response = await axios.post(request_data.url, querystring.stringify(request_data.data), { headers: {
//       ...headers,
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Accept': 'application/json',
//     }});

//     const params = new URLSearchParams(response.data);
//     const accessToken = params.get('oauth_token');
//     const accessTokenSecret = params.get('oauth_token_secret');
//     const userId = params.get('user_id');
//     const screenName = params.get('screen_name');

//     // Store these tokens in the session and use them for further API requests
//     req.session.accessToken = accessToken;
//     req.session.accessTokenSecret = accessTokenSecret;

//     res.send(`Authentication successful! User ID: ${userId}, Screen Name: ${screenName}`);
//   } catch (error) {
//     console.error('Error getting access token:', error);
//     res.status(500).send('Error getting access token');
//   }
// });

// // Step 3: Get Twitter user info
// app.get('/twitter-user-info', async (req, res) => {
//   const accessToken = req.session.accessToken;
//   const accessTokenSecret = req.session.accessTokenSecret;

//   if (!accessToken || !accessTokenSecret) {
//     return res.status(400).send('User not authenticated');
//   }

//   const url = 'https://api.twitter.com/1.1/account/verify_credentials.json';
//   const request_data = {
//     url,
//     method: 'GET',
//   };

//   const headers = oauth.toHeader(oauth.authorize(request_data, { key: accessToken, secret: accessTokenSecret }));

//   try {
//     const response = await axios.get(url, { headers: {
//       ...headers,
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Accept': 'application/json',
//     }});
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error fetching user info:', error);
//     res.status(500).send('Error fetching user info');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
