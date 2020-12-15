const express = require('express');
const router = express.Router();
const connection = require('./../connection');
const { logInfos, endRequest } = require('../lib/utils');

router.get('/', logInfos, (req, res, next) => {
	const maRequete = `SELECT * FROM user where role="hunter"`;
	connection.query(maRequete, (err, results) => {
		endRequest(res, results, err);
	});
});

router.get('/:id', logInfos, (req, res, next) => {
	const id = req.params.id;
	const maRequete = `SELECT * FROM user WHERE id = ? AND role="hunter" `;
	connection.query(maRequete, [id], (err, results) => {
		endRequest(res, results, err);
	});
});

router.post('/signup', logInfos, (req, res, next) => {
	console.log(req.body);
	let fields = Object.keys(req.body).join(',');
	let data = Object.values(req.body).join("','");
	const maRequete = `INSERT INTO user(${fields}) VALUES ( '${data}' )`;
	connection.query(maRequete, (err, results) => {
		const myID = results.insertId;
		const returnMe = `SELECT * FROM user WHERE id = ? AND role="hunter" `;
		connection.query(returnMe, [myID], (err, results) => {
			endRequest(res, results, err);
		});
	});
});

router.post('/signin', logInfos, (req, res, next) => {
  console.log(req.body);
  const name = req.body.name;
  const pass =req.body.pass
	const maRequete = `SELECT * FROM user WHERE name = ? AND pass= ? AND role="hunter" `

	connection.query(maRequete,[name, pass], (err, results) => {
		endRequest(res, results, err);
	});
});

router.put('/:id', logInfos, (req, res, next) => {});

router.delete('/:id', logInfos, (req, res, next) => {});

module.exports = router;
