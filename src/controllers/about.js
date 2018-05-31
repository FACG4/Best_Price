
module.exports = (req, res) => {
  let loggedIn;
  res.render('about', {
    style: 'about',
    loggedIn: req.loggedIn,
    userName: req.userName,
  });
};
