'use strict'

const path = require('path');
const express = require('express');

const app = express();

// GET - Request resources from server
// POST - Send data to the server (general purpose)
// PUT - Send data to the server at a particular location
// PATCH - Send data to update something on the server
// OPTIONS - 
// HEAD - 


app.use('/assets', express.static(path.join(__dirname, './assets')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Todo Application'
    });
});

app.get('/login', (req, res) => {
    res.send('This is our login page');
});


app.listen(3000, ()=>{
    console.log('Listening on Port 3000');
});