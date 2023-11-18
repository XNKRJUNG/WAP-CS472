const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    fs.createReadStream('image.jpg').pipe(res);
}).listen(3000);