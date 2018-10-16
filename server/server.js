const mysql = require('mysql');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require('path');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client/index.html')));

var connection = mysql.createConnection({
  user     : 'root',
  database : 'movielist'
});

//query database
function getAll(callback) {
  connection.query('SELECT * FROM movies', function (error, results) {
	  if (error) {
		  callback(error);
	 	  return;
		}
		callback(null, results);
  });	
}

//server query
app.get('/movies', function (req, res) {
  getAll((err, results) => {
  	if (err) {
  	  res.status(500).send(err);
  	} else {
      res.send(results);
  	}
  })
});

function insert(item, quantity, callback) {
	const query = `INSERT INTO groceries (title) VALUES (?)`;
	connection.query(query, [title], function (error, results) {
	  if (error) {
	  	callback(error);
	  	return;
	  }
	  callback(null, 'success!');
	});	
}

app.post('/movies', function (req, res) {
  console.log(req.body);
  db.insertOne(req.body.title, (err, results) => {
  	if (err) {
  	  res.status(500).send(err);
  	} else {
  	  res.send(results);
  	}
  })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

