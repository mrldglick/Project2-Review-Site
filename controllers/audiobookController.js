const Album = require('../models/album');

function albumsIndex(req, res) {
  Album
    .find()
    .then(albums => {
      res.render('albums/index', { albums });
    });
}

function albumsShow(req, res){
  const albumId = req.params.id;
  Album
    .findById(albumId)
    .then(album => res.render('albums/show', { album }));
}

function albumsNew(req, res) {
  res.render('albums/new');
}

function albumsCreate(req, res){
  req.body.genres = req.body.genres.split(',');
  Album
    .create(req.body)
    .then(() => res.redirect('/albums'))
    .catch(err => res.status(500).send(err));
}

function albumsEdit(req, res){
  Album
    .findById(req.params.id)
    .then(album => res.render('albums/edit', { album }))
    .catch(err => res.status(404).send(err));

}

function albumsUpdate(req, res){
  req.body.genres = req.body.genres.split(',');
  Album
    .findByIdAndUpdate(req.params.id, req.body)
    .then(album => res.redirect(`/albums/${album.id}`))
    .catch(err => res.status(500).send(err));
}

function albumsDelete(req, res) {
  Album
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/albums'))
    .catch(err => res.status(404).send(err));

}


module.exports = {
  index: albumsIndex,
  show: albumsShow,
  new: albumsNew,
  create: albumsCreate,
  edit: albumsEdit,
  update: albumsUpdate,
  delete: albumsDelete
};
