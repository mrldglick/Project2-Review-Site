const User = require('../models/user');

function registrationNew(req, res) {
  res.render('registrations/new');
}

function registrationCreate(req, res){
  User
    .create(req.body)
    .then(user => {
      console.log('we have created a user', user);
      res.redirect('/');
    })
    .catch(() => res.status(500).redirect('/registrations/new'));
}

module.exports ={
  new: registrationNew,
  create: registrationCreate
};
