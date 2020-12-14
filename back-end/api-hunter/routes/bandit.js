const express = require("express");
const router = express.Router();
const connection = require("./../connection");
const { logInfos, endRequest } = require("../lib/utils");


router.get("/", logInfos, (req, res, next) => {
    const maRequete =  `SELECT * FROM bandit`
    connection.query(maRequete, (err, results) => {
        endRequest(res, results, err);
      })
});

router.get("/:id", logInfos, (req, res, next) => {
    const id = req.params.id ;
    const maRequete =  `SELECT * FROM bandit RIGHT JOIN user_bandit ON bandit.id = user_bandit.bandit_id WHERE user_bandit.user_id = ? `
    connection.query(maRequete,[id], (err, results) => {
        endRequest(res, results, err);
      })
});

router.post("/", logInfos, (req, res, next) => {
  console.log(req.body);
  let fields = Object.keys(req.body).join(",");
  let data = Object.values(req.body).join("','");
  const maRequete=`INSERT INTO bandit(${fields}) VALUES ( '${data}' )`
  connection.query(maRequete, (err, results) => {
    endRequest(res, results, err);
  })
});

router.put("/:id", logInfos, (req, res, next) => {
  
});

router.delete("/:id", logInfos, (req, res, next) => {
  
});

module.exports = router;
