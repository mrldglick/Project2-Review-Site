const Album = require('../models/album');


function commentsCreate(req, res) {
  Album
    .findById(req.params.albumId)
    .then(album => {
      album.comments.push(req.body);
      return album.save();
    })
    .then(album => res.redirect(`/albums/${album.id}`)) //back to show page
    .catch(err => console.log(err));
}

function commentsDelete(req, res, next) {
  Album
    .findById(req.params.albumId)
    .then(album => {
      //// TODO: this should check that the user is the commenting user
      album.comments = album.comments.filter(
        comment => comment.id !== req.params.commentId
      );
      return album.save();
    })
    .then(album => res.redirect(`/albums/${album.id}`)) //back to show page
    .catch(next);
}



module.exports = {
  create: commentsCreate,
  delete: commentsDelete
};
