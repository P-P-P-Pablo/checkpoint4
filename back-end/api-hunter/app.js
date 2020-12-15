const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.API_PORT;

const { log, logInfos } = require('./lib/utils'); // log() is just a shortcut to console.log (lib/utils.js)
app.use(logInfos);
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT'); // * is very bad idea but meh
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);

const indexRouter = require('./routes/index');
const banditRouter = require('./routes/bandit');
const sherifRouter = require('./routes/sherif');
const hunterRouter = require('./routes/hunter');

app.use('/', indexRouter);
app.use('/bandits', banditRouter);
app.use('/sherifs', sherifRouter);
app.use('/hunters', hunterRouter);

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
