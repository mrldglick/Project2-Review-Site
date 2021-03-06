const User = require('../models/user');


function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsCreate(req, res){
  User
    .findOne({ email: req.body.email })
    .then(user =>{
      if (!user || !user.validatePassword(req.body.password)) {
        res.status(401).render('sessions/new', { message: 'You are not on the list, you are not getting in!'});
      } else {
        const messages = ['Greetings mighty','Hello little','Oh, its you my'];
        const message = messages[Math.floor(Math.random() * messages.length)];
        req.flash('primary', ` ${message} Lord ${user.name}, the spiders have grown bold without you!`);
        req.session.userId = user.id;
        res.redirect('/');
      //on successful login
      }
    });
}

function sessionsDelete(req, res) {
  return req.session.regenerate(() => {
    req.flash('info', 'You have been cast out');
    res.redirect('/');

  });
}



module.exports ={
  new: sessionsNew,
  create: sessionsCreate,
  delete: sessionsDelete
};
