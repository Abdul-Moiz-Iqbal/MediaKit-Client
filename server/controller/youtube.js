const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { google } = require('googleapis');
const url = require('url');

const oauth2Client = new google.auth.OAuth2(
    '681648792224-99apagba8q25s7ena85lrg542hgc9g4g.apps.googleusercontent.com',
    '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',
    'http://localhost:8080/oauth2callback'
);

const scopes = [
    'https://www.googleapis.com/auth/youtube.readonly'
];

const JWT_SECRET = `${process.env.JWT_SECRET}`; // Replace with a strong secret

exports.login = async (req, res) => {
    const state = crypto.randomBytes(16).toString('hex'); // Generate a secure random state
    const token = jwt.sign({ state: state }, JWT_SECRET, { expiresIn: '1h' });
    
    res.cookie('auth_token', token, { httpOnly: true, secure: false }); // Set the token as a cookie

    const authorizationUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
        include_granted_scopes: true,
        state: state // Pass the raw state string here
    });

    res.redirect(authorizationUrl);
};

exports.oauth2callback = async (req, res) => {
    let q = url.parse(req.url, true).query;

    const token = req.cookies.auth_token;
    if (!token) {
        return res.status(401).send('Unauthorized');
    }

    let decoded;
    try {
        decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
        return res.status(403).send('Invalid token');
    }

    if (q.state !== decoded.state) {
        console.log('State mismatch. Possible CSRF attack');
        return res.status(403).send('State mismatch. Possible CSRF attack');
    }

    if (q.error) {
        console.log('Error:' + q.error);
        return res.status(500).send('OAuth error: ' + q.error);
    }

    let { tokens } = await oauth2Client.getToken(q.code);
    oauth2Client.setCredentials(tokens);

    // Now fetch YouTube channel statistics using YouTube Analytics API
    const analytics = google.youtubeAnalytics({
        version: 'v2',
        auth: oauth2Client
    });

    // Example query to get channel statistics
    analytics.reports.query({
        ids: 'channel==MINE',
        startDate: '2000-01-01',
        endDate: '2030-12-31',
        metrics: 'views,subscribersGained,likes' // Corrected metrics: views, subscribersGained, likes
    }, (err, response) => {
        if (err) {
            console.error('The API returned an error:', err);
            res.status(500).send('Error fetching YouTube analytics');
            return;
        }

        const data = response.data;
        if (data.rows && data.rows.length > 0) {
            const [views, subscribersGained, likes] = data.rows[0];
            res.status(200).json({
                views: views,
                subscribersGained: subscribersGained,
                likes: likes
            });
        } else {
            res.status(404).send('No data available');
        }
    });
};
