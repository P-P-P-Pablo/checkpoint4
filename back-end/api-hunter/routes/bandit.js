const express = require('express');
const router = express.Router();
const connection = require('./../connection');
const { logInfos, endRequest } = require('../lib/utils');

router.get('/', logInfos, (req, res, next) => {
	const maRequete = `SELECT * FROM bandit`;
	connection.query(maRequete, (err, results) => {
		endRequest(res, results, err);
	});
});

router.get('/:id', logInfos, (req, res, next) => {
	const id = req.params.id;
	const maRequete = `SELECT * FROM bandit RIGHT JOIN user_bandit ON bandit.id = user_bandit.bandit_id WHERE user_bandit.user_id = ? `;
	connection.query(maRequete, [id], (err, results) => {
		endRequest(res, results, err);
	});
});

router.post('/:id', logInfos, (req, res, next) => {
	let myId = req.params.id;
	let banditId;
	let fields = Object.keys(req.body).join(', ');
	let data = Object.values(req.body).join("','");
	const maRequete = `INSERT INTO bandit( ${fields}) VALUES ( ' ${data}' )`;
	connection.query(maRequete, (err, results) => {
		banditId = results.insertId;
		const assoRequete = `INSERT INTO user_bandit ( ${
			'`' + 'bandit_id' + '`'
		}, ${'`' + 'user_id' + '`'}) VALUES ( ? , ? )`;
		connection.query(assoRequete, [banditId, myId], (err2, results2) => {
			if (err2) {
				console.trace(err2);
			} else {
				endRequest(res, results, err);
			}
		});
	});
});

router.put('/:id/chasse/:banditId', logInfos, (req, res, next) => {
	let myId = req.params.id;
	let banditId = req.params.banditId;
	const maRequete = "UPDATE bandit SET `status` = 'chasse' WHERE id = ? ";
	connection.query(maRequete,[banditId], (err, results) => {
		const assoRequete = `INSERT INTO user_bandit ( ${
			'`' + 'bandit_id' + '`'
		}, ${'`' + 'user_id' + '`'}) VALUES ( ? , ? )`;
		connection.query(assoRequete, [banditId, myId], (err2, results2) => {
			if (err2) {
				console.trace(err2);
			} else {
				endRequest(res, results, err);
			}
		});
	});
});

router.put('/:id/attrape/:banditId', logInfos, (req, res, next) => {
	
	let banditId = req.params.banditId;
	const maRequete = "UPDATE bandit SET `status` = 'attrape' WHERE id = ? ";
	connection.query(maRequete,[banditId], (err, results) => {
		endRequest(res, results, err);
	});
});

router.delete('/:id', logInfos, (req, res, next) => {});

module.exports = router;
