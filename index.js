const express = require('express');
const PhepTinh = require('./PhepTinh');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

let arrNames = ['NodeJS', 'Android', 'iOS', 'React Native'];

app.use(express.static('./public'));

app.listen(3000);

app.get('/', (req, res) => res.render('home'));

app.get('/royal', (req, res) => res.render('royal'));

app.get('/home', (req, res) => res.render('clothing'));

app.get('/trangchu', (req, res) => res.send('Homepage'));

app.get('/info/:id', require('./controllers/studentController'));

app.get('/show/:firstname/:lastname', require('./controllers/showController'));

app.get('/tinh/:soA/:soB/:tenPhepTinh', require('./controllers/xuLyPhepTinh'));

app.get('/a/:username/:password', (req, res) => {
    const { username, password } = req.params;
    let isAdmin = false;
    if (username === 'khoapham' && password === '123') isAdmin = true;
    res.render('a', { isAdmin, name: username });
});

app.get('/subjects', (req, res) => res.render('subjects', { arrNames }));

//https://github.com/vanpho93/oop0806b3

//route - router
//1 route co the handle nhieu link
