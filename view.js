const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node'
  });

router.get('/admin', (req, res) => {
    connection.query('SELECT * FROM user', (error, results) => {
      if (error) throw error;
  
      res.json(results);
    });
  });


router.get('/links/all' , (req, res) => {
    res.send("<a href='https://www.google.com'>Google</a>"
              + "<br><a href='https://www.uniwa.gr'>Uniwa</a>"
              + "<br><a href='https://www.youtube.com'>YouTube</a>"
              + "<br><a href='https://www.steam.com'>Steam</a>"
              + "<br><a href='https://www.facebook.com'>Facebook</a>"
              + "<br><a href='https://www.instagram.com'>Instagram</a>"
              + "<br><a href='https://www.twitter.com'>Twitter</a>"
              + "<br><a href='https://www.linkedin.com'>LinkedIn</a>"
              + "<br><a href='https://www.github.com'>GitHub</a>"
              + "<br><a href='https://www.stackoverflow.com'>StackOverflow</a>"
              + "<br><a href='https://www.reddit.com'>Reddit</a>"
              + "<br><a href='https://www.twitch.tv'>Twitch</a>"
              + "<br><a href='https://www.netflix.com'>Netflix</a>"
              + "<br><a href='https://www.amazon.com'>Amazon</a>"
              + "<br><a href='https://www.ebay.com'>Ebay</a>"
              + "<br><a href='https://www.aliexpress.com'>AliExpress</a>");
});
module.exports = router;

