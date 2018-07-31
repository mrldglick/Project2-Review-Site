const Audiobook = require('../models/audiobook');

function audiobooksIndex(req, res) {
  Audiobook
    .find()
    .then(audiobooks => {
      res.render('audiobooks/index', { audiobooks });
    });
}

function audiobooksShow(req, res){
  const audiobookId = req.params.id;
  Audiobook
    .findById(audiobookId)
    .then(audiobook => {
      res.render('audiobooks/show', { audiobook });
    });
}

function audiobooksNew(req, res) {
  res.render('audiobooks/new');
}

function audiobooksCreate(req, res){
  Audiobook
    .create(req.body)
    .then(() => res.redirect('/audiobooks'))
    .catch(err => res.status(500).send(err));
}

function audiobooksEdit(req, res){
  Audiobook
    .findById(req.params.id)
    .then(audiobook => res.render('audiobooks/edit', { audiobook }))
    .catch(err => res.status(404).send(err));

}

function audiobooksUpdate(req, res){
  Audiobook
    .findByIdAndUpdate(req.params.id, req.body)
    .then(audiobook => res.redirect(`/audiobooks/${audiobook.id}`))
    .catch(err => res.status(500).send(err));
}

function audiobooksDelete(req, res) {
  Audiobook
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/audiobooks'))
    .catch(err => res.status(404).send(err));

}


module.exports = {
  index: audiobooksIndex,
  show: audiobooksShow,
  new: audiobooksNew,
  create: audiobooksCreate,
  edit: audiobooksEdit,
  update: audiobooksUpdate,
  delete: audiobooksDelete
};
