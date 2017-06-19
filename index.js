const express = require('express');
const PhepTinh = require('./PhepTinh');

const app = express();

app.listen(3000);

app.get('/', (req, res) => res.send('<h1>HELLO</h1>'));

app.get('/trangchu', (req, res) => res.send('Homepage'));

function studentController(req, res) {
    const { id } = req.params;
    res.send('Student info: ' + id);
}

app.get('/info/:id', studentController);

app.get('/show/:firstname/:lastname', require('./controllers/showController'));

app.get('/tinh/:soA/:soB/:tenPhepTinh', require('./controllers/xuLyPhepTinh'));

//https://github.com/vanpho93/oop0806b3

//route - router
//1 route co the handle nhieu link
