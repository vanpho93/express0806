const express = require('express');
const PhepTinh = require('./PhepTinh');

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

app.get('/tinh/:soA/:soB/:tenPhepTinh', (req, res) => {

});

//https://github.com/vanpho93/oop0806b3

//route - router
//1 route co the handle nhieu link
