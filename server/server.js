const mysql = require('mysql');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require('path');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client')));

var connection = mysql.createConnection({
  user     : 'root',
  database : 'movielist'
});

app.get('/movies', function (req, res) {
  connection.query('SELECT * FROM movies', function (error, results) {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(results);
    }
  }); 
});

app.post('/movies', function (req, res) {
  const query = `INSERT INTO movies (title) VALUES (?)`;
  var title = req.body.title;
  connection.query(query, [title], function (error, results) {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send();
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

