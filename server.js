const express = require('express');
const fingerprint  = require('express-fingerprint');
const path = require('path');
const rootRouter = require('./routers');
const app = express();

//config using json type
app.use(express.json());

//user fingerprint
app.use(fingerprint());

//static folder
const publicDir = path.join(__dirname, './public');

//setup static folder
app.use('/public',express.static(publicDir));

//user router
app.use('/api/v1',rootRouter);

//listen event
app.listen(3350, ()=>{
    console.log('App listening on http://localhost:3350/');
});