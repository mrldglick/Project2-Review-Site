const Audiobook = require('../models/audiobook');


function commentsCreate(req, res) {
  Audiobook
    .findById(req.params.audiobookId)
    .then(audiobook => {
      audiobook.comments.push(req.body);
      return audiobook.save();
    })
    .then(audiobook => res.redirect(`/audiobooks/${audiobook.id}`))
    .catch(err => console.log(err));
}

function commentsDelete(req, res, next) {
  Audiobook
    .findById(req.params.audiobookId)
    .then(audiobook => {
      //// TODO: this should check that the user is the commenting user
      audiobook.comments = audiobook.comments.filter(
        comment => comment.id !== req.params.commentId
      );
      return audiobook.save();
    })
    .then(audiobook => res.redirect(`/audiobooks/${audiobook.id}`))
    .catch(next);
}



module.exports = {
  create: commentsCreate,
  delete: commentsDelete
};
