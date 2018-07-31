

const mongoose = require('mongoose');

const audiobookSchema = new mongoose.Schema({
  name: String,
  author: { type: String, required: true },
  bookCover: { type: String, required: true },
  narrator: { type: String, required: true },
  publicationYear: String,
  genres: [{type: String}],
  length: Number,
  comments: [{ name: String, content: String}]
  //is time something that can be defined in a number or is it a string. Does not matter right now but would be good to find out.
});


module.exports = mongoose.model('Audiobook', audiobookSchema);
