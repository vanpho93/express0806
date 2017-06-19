const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    res.send('<h1>HELLO</h1>');
});

app.get('/trangchu', (req, res) => res.send('Homepage'));

app.get('/info/:id', (req, res) => {
    const idStudent = req.params.id;
    res.send('Student info: ' + idStudent);
});

//route - router
//1 route co the handle nhieu link
