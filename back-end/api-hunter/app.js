const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.API_PORT;

const {log} = require('./lib/utils'); // log() is just a shortcut to console.log (lib/utils.js)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const indexRouter = require('./routes/index');
const banditRouter = require('./routes/bandit');
const sherifRouter = require('./routes/sherif');
const hunterRouter = require('./routes/hunter');

app.use('/', indexRouter);
app.use('/bandits', banditRouter);
app.use('/sherifs', sherifRouter);
app.use('/hunters', hunterRouter);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});