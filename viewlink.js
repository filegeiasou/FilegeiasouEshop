const express = require('express');
const router = express.Router();

router.get('/all' , (req, res) => {
    res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Links</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                    }
                    a {
                        display: block;
                        margin-bottom: 10px;
                        color: #333;
                        text-decoration: none;
                    }
                    a:hover {
                        color: #666;
                    }
                </style>
            </head>
            <body>
                <a href='https://www.google.com'>Google</a>
                <a href='https://www.uniwa.gr'>Uniwa</a>
                <a href='https://www.youtube.com'>YouTube</a>
                <a href='https://www.steam.com'>Steam</a>
                <a href='https://www.facebook.com'>Facebook</a>
                <a href='https://www.instagram.com'>Instagram</a>
                <a href='https://www.twitter.com'>Twitter</a>
                <a href='https://www.linkedin.com'>LinkedIn</a>
                <a href='https://www.github.com'>GitHub</a>
                <a href='https://www.stackoverflow.com'>StackOverflow</a>
                <a href='https://www.reddit.com'>Reddit</a>
                <a href='https://www.twitch.tv'>Twitch</a>
                <a href='https://www.netflix.com'>Netflix</a>
                <a href='https://www.amazon.com'>Amazon</a>
                <a href='https://www.ebay.com'>Ebay</a>
                <a href='https://www.aliexpress.com'>AliExpress</a>
            </body>
            </html>
            `);
});

module.exports = router;