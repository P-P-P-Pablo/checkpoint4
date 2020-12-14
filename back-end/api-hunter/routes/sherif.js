const express = require("express");
const router = express.Router();
const connection = require("./../connection");
const { logInfos, endRequest } = require("../lib/utils");


router.get("/", logInfos, (req, res, next) => {
    const maRequete =  `SELECT * FROM user where role="sherif"`
    connection.query(maRequete, (err, results) => {
        endRequest(res, results, err);
      })
});

router.get("/:id", logInfos, (req, res, next) => {
    const id = req.params.id ;
    const maRequete =  `SELECT * FROM user WHERE id = ? AND role="sherif`
    connection.query(maRequete,[id], (err, results) => {
        endRequest(res, results, err);
      })
});

router.post("/", logInfos, (req, res, next) => {
  
});

router.put("/:id", logInfos, (req, res, next) => {
  
});

router.delete("/:id", logInfos, (req, res, next) => {
  
});



module.exports = router;
