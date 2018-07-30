const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  author: { type: String, required: true },
  authorPic: { type: String, required: true },
  nationality: String,
  genres: [{type: String}],
  numberOfPublishedAudiobooks: Number,
  // find some way to have number updated itself
  audiobooks: ['']
});

const model = mongoose.model('Author', authorSchema);
module.exports = model;
