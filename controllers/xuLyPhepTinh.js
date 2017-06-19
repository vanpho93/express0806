const PhepTinh = require('../PhepTinh');

function xuLyPhepTinh(req, res) {
    const { soA, soB, tenPhepTinh } = req.params;
    const pt = new PhepTinh(soA, soB, tenPhepTinh);
    res.send(pt.getResultString()); 
}

module.exports = xuLyPhepTinh;
