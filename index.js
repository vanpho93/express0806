const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    res.send('<h1>HELLO</h1>');
});

app.get('/trangchu', (req, res) => res.send('Homepage'));

app.get('/info/:id', (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;
    res.send('Student info: ' + id);
});

app.get('/show/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.send('Xin chao ' + firstname + ' ' + lastname);
});

//route - router
//1 route co the handle nhieu link
