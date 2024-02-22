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


module.exports = router;
