const mongoose = require('mongoose');
const { DB_URI } = require('../config/environment');
mongoose.connect(DB_URI);
// models
const Audiobook = require('../models/audiobook');

Audiobook.collection.drop();

Audiobook
.create([{
  name: 'Dungeon Born',
  author: 'Dakota Krout',
  bookCover: 'https://images-eu.ssl-images-amazon.com/images/I/619QOcRRf5L._AA300_.jpg',
  narrator: 'Vikas Adam',
  publicationYear: '28-03-17',
  genres: ['fantasy', 'epic fantasy'],
  length: 12.32,
  comments: [
    {name: 'Louis', content: 'something something something'
  }]
},
{
  name: 'Brilliance',
  author: 'Marcus Sakey',
  bookCover: 'https://www.booktopia.com.au/http_coversbooktopiacomau/big/9781480565371/brilliance.jpg',
  narrator: 'Luke Daniels',
  publicationYear: '16-07-13',
  genres: ['Crime', 'Suspense', 'Sci-Fi', 'Superpower'],
  length: 12.35,
  comments: [
    {name: 'Louis', content: 'something something something'
  }]
},
{
  name: 'Life Reset',
  author: 'Shemer Kuznits',
  bookCover: 'https://i0.wp.com/audiobookreviewer.com/wp-content/uploads/sites/209/2017/11/61jubPEUkzL._SL500_.jpg?resize=300%2C300&ssl=1',
  narrator: 'Jeff Hayes',
  publicationYear: '16-10-17',
  genres: ['Sci-Fi', 'Fantasy', 'LitRPG'],
  length: 24.39,
  comments: [
    {name: 'Louis', content: 'something something something'
  }]
},
{
  name: 'Hero of Thera',
  author: 'Eric Nylund',
  bookCover: 'https://m.media-amazon.com/images/I/51Et2YANQLL._SL500_.jpg',
  narrator: 'Jeff Hayes',
  publicationYear: '31-07-17',
  genres: ['Fantasy', 'LitRPG'],
  length: 11.38,
  comments: [
    {name: 'Louis', content: 'something something something'
  }]
},
{
  name: 'Mort',
  author: 'Terry Pratchett',
  bookCover: 'https://m.media-amazon.com/images/I/41-qriwpF7L._SL500_.jpg',
  narrator: 'Nigel Planer',
  publicationYear: '17-07-07',
  genres: ['Fantasy', 'Comedy'],
  length: 7.38
},
{
  name: 'Nightlord',
  author: 'Garon Whited',
  bookCover: 'https://m.media-amazon.com/images/I/510aPvG-8dL._SL500_.jpg',
  narrator: 'Sean Runnette',
  publicationYear: '07-07-15',
  genres: ['Fantasy', 'Comedy'],
  length: 36.55,
  comments: [
    {name: 'Louis', content: 'something something something'
  }]
}
])

.then(books => console.log(`Created ${books.length} books`))
.catch(err => console.log('Error while seeding', err));
