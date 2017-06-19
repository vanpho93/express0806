function studentController(req, res) {
    const { id } = req.params;
    res.send('Student info: ' + id);
}

module.exports = studentController;
