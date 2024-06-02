const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Replace these with your actual values
// const clientID = '1352831472059482'; // Your App ID from Facebook Developer Dashboard
const clientID = '100010190976472'; // Your App ID from Facebook Developer Dashboard
const clientSecret = '86ad1717dfd6e398f6c557a28248a5b8'; // Your App Secret from Facebook Developer Dashboard
const redirectUri = 'http://localhost:3000/auth/callback'; // Your redirect URI

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Facebook Login - Redirect to Facebook OAuth URL
app.get('/login', (req, res) => {
    const fbAuthUrl = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${clientID}&redirect_uri=${redirectUri}&scope=pages_show_list,pages_read_engagement`;
    res.redirect(fbAuthUrl);
});

// Step 2: Handle Facebook OAuth Callback
app.get('/auth/callback', async (req, res) => {
    const code = req.query.code;

    if (!code) {
        return res.status(400).send('Authorization code is missing');
    }

    try {
        const tokenResponse = await axios.get('https://graph.facebook.com/v12.0/oauth/access_token', {
            params: {
                client_id: clientID,
                redirect_uri: redirectUri,
                client_secret: clientSecret,
                code,
            },
        });

        const accessToken = tokenResponse.data.access_token;

        // Fetch the user's pages
        const pagesResponse = await axios.get('https://graph.facebook.com/v12.0/me/accounts', {
            params: {
                access_token: accessToken,
            },
        });

        const pages = pagesResponse.data.data;

        // Render a page to select a page (simplified for example purposes)
        res.send(`
            <h1>Select a Page</h1>
            <form action="/select-page" method="post">
                ${pages.map(page => `<div><input type="radio" name="pageId" value="${page.id}">${page.name}</div>`).join('')}
                <input type="hidden" name="accessToken" value="${accessToken}">
                <button type="submit">Select</button>
            </form>
        `);
    } catch (error) {
        console.error('Error during OAuth callback:', error.response ? error.response.data : error.message);
        res.status(500).send('Internal Server Error');
    }
});

// Step 3: Handle Page Selection
app.post('/select-page', async (req, res) => {
    const { pageId, accessToken } = req.body;

    try {
        // Fetch page details
        const pageDetails = await getPageDetails(pageId, accessToken);
        res.json(pageDetails);
    } catch (error) {
        console.error('Error fetching page details:', error.response ? error.response.data : error.message);
        res.status(500).send('Internal Server Error');
    }
});

// Function to get page details
const getPageDetails = async (pageId, accessToken) => {
    const url = `https://graph.facebook.com/v12.0/${pageId}?fields=id,name,fan_count,followers_count&access_token=${accessToken}`;
    const response = await axios.get(url);
    return response.data;
};

// Function to get page posts
const getPagePosts = async (pageId, accessToken) => {
    const url = `https://graph.facebook.com/v12.0/${pageId}/posts?fields=id,message,created_time,likes.summary(true),comments.summary(true),shares&access_token=${accessToken}`;
    const response = await axios.get(url);
    return response.data;
};

// Function to get page videos
const getPageVideos = async (pageId, accessToken) => {
    const url = `https://graph.facebook.com/v12.0/${pageId}/videos?fields=id,title,description,created_time,likes.summary(true),comments.summary(true),views&access_token=${accessToken}`;
    const response = await axios.get(url);
    return response.data;
};

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
