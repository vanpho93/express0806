const express = require('express');
const PhepTinh = require('./PhepTinh');
const arrSanPham = require('./SanPham');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

let arrNames = ['NodeJS', 'Android', 'iOS', 'React Native'];

app.use(express.static('./public'));

app.listen(3000);

app.get('/', (req, res) => res.render('home'));

app.get('/royal', (req, res) => res.render('royal'));

app.get('/home', (req, res) => res.render('clothing', { arrSanPham }));

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

app.get('/phim', (req, res) => res.render('phim', { arrPhim }));

class Phim {
    constructor(name, idYoutube) {
        this.name = name;
        this.idYoutube = idYoutube;
    }
}

const arrPhim = [
    new Phim('[Kỉ LỤC] Olympia 13 - THPT Chuyên Thái Bình', 'SjsaJQZ0XZc'),
    new Phim('Câu trả lời "bá đạo" nhất trong lịch sử Đường lên đỉnh Olympia', '7d6fRWOebkk'),
    new Phim('Câu hỏi "nhạy cảm" của Ai là triệu phú gây xôn xao', '4RI0Ab675Ik'),
    new Phim('Hoi xoay dap xoay so 39', 'dMqYW-gZjO0')
];
