function showController(req, res) {
    const { firstname, lastname } = req.params;
    res.send('Xin chao ' + firstname + ' ' + lastname);
}

module.exports = showController;
