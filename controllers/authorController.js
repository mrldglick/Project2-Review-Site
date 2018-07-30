const Author = require('../models/author');

function authorsIndex(req, res) {
  Author
    .find()
    .then(authors => {
      res.render('authors/index', { authors });
    });
}

function authorsShow(req, res){
  const authorId = req.params.id;
  Author
    .findById(authorId)
    .then(author => res.render('authors/show', { author }));
}

function authorsNew(req, res) {
  res.render('authors/new');
}

function authorsCreate(req, res){
  req.body.genres = req.body.genres.split(',');
  Author
    .create(req.body)
    .then(() => res.redirect('/authors'))
    .catch(err => res.status(500).send(err));
}

function authorsEdit(req, res){
  Author
    .findById(req.params.id)
    .then(author => res.render('authors/edit', { author }))
    .catch(err => res.status(404).send(err));

}

function authorsUpdate(req, res){
  req.body.genres = req.body.genres.split(',');
  Author
    .findByIdAndUpdate(req.params.id, req.body)
    .then(author => res.redirect(`/authors/${author.id}`))
    .catch(err => res.status(500).send(err));
}

function authorsDelete(req, res) {
  Author
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/authors'))
    .catch(err => res.status(404).send(err));

}


module.exports = {
  index: authorsIndex,
  show: authorsShow,
  new: authorsNew,
  create: authorsCreate,
  edit: authorsEdit,
  update: authorsUpdate,
  delete: authorsDelete
};
