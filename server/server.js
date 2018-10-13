const mysql = require('mysql');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

var connection = mysql.createConnection({
  user     : 'root',
  password : '',
  database : 'movielist'
});

app.get('/movies', (req, res) => {
	connection.query('SELECT * FROM movies', function(err, results) {
    if (err) throw err;
		res.send(results);
	});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

