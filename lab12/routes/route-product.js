const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.get('/product', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'product.html'));
});

router.post('/product', (req, res)=>{
    const product = JSON.stringify(req.body);
    console.log(product);
    fs.writeFile('product.txt', product, err=>{
        if(err){
            console.log('Product not saved properly');
            throw err;
        }
    });
    res.send('<h1> Product saved successfully!<h1/>');
});

module.exports = router;