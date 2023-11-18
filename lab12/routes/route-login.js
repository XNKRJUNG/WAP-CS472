const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});

router.post('/', (req, res, next) => {
    const accJson = `{"id":"alemu","password":"1234"}`;
    const acc = JSON.parse(accJson);
    if (acc.id == req.body.id && acc.password == req.body.password) {
        console.log('logged in successfully!')
        res.send('<h1>logged in successfully!</h1>');
    } else {
        res.send('user Id or password not correct');
    }
});

module.exports = router;