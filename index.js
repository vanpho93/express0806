const express = require('express');
const PhepTinh = require('./PhepTinh');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.listen(3000);

app.get('/', (req, res) => res.render('home'));

app.get('/royal', (req, res) => res.render('royal'));

app.get('/trangchu', (req, res) => res.send('Homepage'));

app.get('/info/:id', require('./controllers/studentController'));

app.get('/show/:firstname/:lastname', require('./controllers/showController'));

app.get('/tinh/:soA/:soB/:tenPhepTinh', require('./controllers/xuLyPhepTinh'));

//https://github.com/vanpho93/oop0806b3

//route - router
//1 route co the handle nhieu link
