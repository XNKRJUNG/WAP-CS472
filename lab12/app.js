const express = require('express');
const path = require('path');
// 2. instantiation
const app = express();
const loginRouter = require('./routes/route-login');
const userRouter = require('./routes/route-user');
const productRouter = require('./routes/route-product')

// 3. configration

app.set('port', process.env.PORT||3000);
//console.log(app.get('port'));
//console.log(process.env.NODE_ENV);
/**
 * Middleware
 */
app.use(express.urlencoded());
// app.use((req, res)=>{
//     res.end(error);
// });
app.use(loginRouter);
app.use(userRouter);
app.use(productRouter);
// app.use((req, res)=>{
//     res.end("I didn't get the login form:");
// });

app.use((err, req, res, next)=>{
    res.status(404).send('404 Error!');
});

app.use((err, req, res, next)=>{
    res.status(500).send('Internal Server 500 Error!');
});

// app.get('/login', (req, res, next)=>{
//     res.sendFile(path.join(__dirname, 'login.html'));
// });
// app.post('/login', (req, res, next)=>{
//     res.sendFile(path.join(__dirname, 'login.html'));
// });
// app.use('/login', (req, res)=>{
//     const templet = `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Login</title>
//     </head>
//     <body>
//         <form action="/login" method="post"></form>
//         <p>User ID: <input type="text" name="id"></p>
//         <p>Password: <input type="password" name="password"></p>
//         <button name="login">Login</button>
//     </body>
//     </html>`;
//     res.end(templet);
// });
// app.use((req, res, next)=>{
//     res.end("HI")
// });
// 7. bootup
app.listen(3000, ()=>console.log("server running at port 3000"));
