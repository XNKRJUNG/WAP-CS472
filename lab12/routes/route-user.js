const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.get('/user', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'user.html'));
});

router.post('/user', (req, res, next)=>{
    const user = JSON.stringify(req.body);
    fs.writeFile('./user.txt', user, err=>{
        if(err){
            console.log('File not saved properly');
            throw err;
        }
    });
    res.send('<h1> User saved successfully!<h1/>');
});

module.exports = router;