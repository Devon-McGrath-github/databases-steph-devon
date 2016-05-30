var data = require('./data');

module.exports = {
  home: home
}

function home(req, res) {
  res.render('home', data)
}
