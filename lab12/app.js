const express = require('express');
const path = require('path');

const app = express();
const loginRouter = require('./routes/route-login');
const userRouter = require('./routes/route-user');
const productRouter = require('./routes/route-product')


app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded());

app.use(loginRouter);
app.use(userRouter);
app.use(productRouter);


app.use((err, req, res, next) => {
    res.status(404).send('404 Error!');
});

app.use((err, req, res, next) => {
    res.status(500).send('Internal Server 500 Error!');
});

app.listen(3000, () => console.log("server running at port 3000"));
