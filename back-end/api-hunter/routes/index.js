var express = require('express');
var express = require('express');
const { endRequest, logInfos } = require('../lib/utils');
var router = express.Router();
const connection = require("./../connection");

router.get('/test',logInfos, function(req, res, next) {
    
    const maRequete =  `SELECT * FROM tabletest`
    connection.query(maRequete, (err, results) => {
        endRequest(res, results, err);
      })
});

router.get('/',logInfos, function(req, res, next) {
    console.log(__dirname);
    res.send('Hello');
});

module.exports = router;
