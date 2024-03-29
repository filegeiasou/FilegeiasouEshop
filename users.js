
const express = require('express');
var fs = require('fs');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node'
  });

//Login page
router.get('/login', (req, res) => {
  res.send('Login');
});


router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], (error, results) => {
      if (error) throw error;
  
      if (results.length > 0) {
        res.sendFile(path.join(__dirname, 'home.html'));
      } else {
        res.send('No user found with the provided username and password');
      }
    });
  });

// Register page
router.get('/register', (req, res) => {
    fs.readFile('register.html', function(err, data) {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        return res.end('Error loading index.html');
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  });

router.post('/register', (req, res) => {
    const username = req.body.name;
    const password = req.body.password;
    const email = req.body.email;

    connection.query('INSERT INTO user (username, password, email) VALUES (?, ?, ?)', [username, password, email], (error, results) => {
      res.redirect('/');
    }); 
    //res.send(`Username: ${username}, Password: ${password} , Email: ${email}`);
  });

router.get('/home' , (req, res) => {
  fs.readFile('home.html', function(err, data) {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      return res.end('Error loading index.html');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});

router.get('/product' , (req, res) => {
  fs.readFile('Product.html', function(err, data) {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      return res.end('Error loading index.html');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});


// router.get('/about' , (req, res) => {
//   fs.readFile('about.html', function(err, data) {
//     if (err) {
//       res.writeHead(500, {'Content-Type': 'text/plain'});
//       return res.end('Error loading index.html');
//     }
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// });

router.get('/about' , (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filegeiasou eShop</title>
    <link rel="stylesheet" href="/styles1.css">
  </head>
  <body>
    <header>
      <h1>Filegeiasou eShop</h1>
      <nav>
        <ul>
          <li><a href="./home">Home</a></li>
          <li><a href="./contact">Contact</a></li>
          <li><a href="./product">Products</a></li>
          <li><a href="./about">About</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="about">
        <h2>About Us</h2>
        <p>Filegeiasou eShop is a tech company that provides a wide range of products to meet all your tech needs. We offer a variety of products including keyboards, mice, and PCs. Our products are of the highest quality and are available at affordable prices. We are committed to providing our customers with the best products and services. Our team is dedicated to ensuring that you have a great shopping experience. We are always here to help you find the perfect product for your needs. We look forward to serving you and providing you with the best tech products.</p>
      <footer id="myFooter">
          <p>&copy; 2024 Filegeiasou eShop</p>
        </footer>      
  </body>
  </html>
  `);
});



router.get('/contact' , (req, res) => {
  fs.readFile('contact.html', function(err, data) {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      return res.end('Error loading index.html');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});



module.exports = router;
