const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/jammin');

// Models
const Album = require('../models/album');

Album.collection.drop();

Album
  .create([
    {
      name: 'Songs in the Key of Life',
      artist: 'Stevie Wonder',
      releaseYear: 1973,
      coverPic: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Songs_in_the_key_of_life.jpg',
      tracks: [
        'Love\'s in need of love today',
        'Superstition',
        'Village Ghetto Land',
        'Summer Soft'
      ],
      genres: ['soul', 'motown'],
      spotifyMonthlyPlays: 3500000,
      label: 'Tamla Motown',
      comments: [
        {name: 'rob', content: 'something something something'
        }]
    },
    {
      name: 'Sunrise',
      artist: 'Sam Feldt',
      releaseYear: 2017,
      coverPic: 'https://i.scdn.co/image/552f1800db6c5ecb6b52d6d62b5f8ddac0ad43d5',
      tracks: ['YES', 'Fade Away', 'Shot by My Own Gun', 'World Can Wait'],
      genres: ['Tropical House'],
      spotifyMonthlyPlays: 1000000,
      label: 'Spinnin Records'
    },
    {
      name: 'Graduation',
      artist: 'Kanye West',
      releaseYear: 2007,
      coverPic: 'https://t2.genius.com/unsafe/1478x0/https%3A%2F%2Fimages.genius.com%2Fcd83ad3baf919c5d988894bec3d6ea74.1000x1000x1.jpg',
      tracks: [
        'Good Morning',
        'Champion',
        'Stronger',
        'I Wonder',
        'Good Life (ft. T-Pain)',
        'Can\'t Tell Me Nothing',
        'Barry Bonds (ft. Lil Wayne)',
        'Drunk and Hot Girls (ft. Yasiin Bey)',
        'Flashing Lights (ft. Dwele)',
        'Everything I Am',
        'The Glory',
        'Homecoming (ft. Chris Martin)',
        'Big Brother',
        'Good Night (ft. Al Be Back & Yasiin Bey)',
        'Bittersweet Poetry (ft. John Mayer)'
      ],
      genres: ['Rap', 'Hip-Hop', 'R&B'],
      spotifyMonthlyPlays: 2400000,
      label: 'Roc-A-Fella'
    },
    {
      name: 'Wickedness Increase',
      artist: 'General Levy',
      releaseYear: '1993',
      coverPic: 'https://images-na.ssl-images-amazon.com/images/I/41eVvJWjeGL.jpg',
      tracks: ['Champange Body', 'Tight like a Vice', 'Diamonds & Pearls', 'Grudge Me', 'Monkey Man'],
      genres: ['Dance Hall', 'Reggae'],
      spotifyMonthlyPlays: 25000,
      label: 'FFRR Records'
    },
    {
      name: 'The Element of Freedom',
      artist: 'Alicia Keys',
      releaseYear: 2009,
      coverPic: 'https://upload.wikimedia.org/wikipedia/en/1/13/Alicia_Keys_-_The_Element_of_Freedom.png',
      tracks: [
        'Doesn\'t Mean Anything',
        'Wait Til You See My Smile',
        'Unthinkable',
        'Empire State of Mind pt. 2'
      ],
      genres: ['soul', 'RnB'],
      spotifyMonthlyPlays: 50000,
      label: 'J'
    },
    {
      name: 'F♯ A♯ ∞',
      artist: 'Godspeed You! Black Emperor' ,
      releaseYear: 1998,
      coverPic: 'https://upload.wikimedia.org/wikipedia/en/e/e1/FsharpAsharpInfinity_vinyl.jpg' ,
      tracks: ['The Dead Flag Blues (Intro)','Slow Moving Trains', 'The Cowboy', 'Drugs in Tokyo', 'The Dead Flag Blues'],
      genres: ['Post-rock', 'experimental rock', 'instrumental rock', 'dark ambient'],
      spotifyMonthlyPlays: 10000000,
      label: 'Constellation'
    },
    {
      name: 'News of the World',
      artist: 'Queen',
      releaseYear: 1977,
      coverPic: 'https://upload.wikimedia.org/wikipedia/en/e/ea/Queen_News_Of_The_World.png',
      tracks: ['We Will Rock You', 'We Arethe Champions', 'Sheer Heart Attack'],
      genres: ['rock', 'Jazz', 'Hard rock', 'Pop rock', 'Glam rock', 'Arena rock'],
      spotifyMonthlyPlays: 18500000,
      label: 'EMI'
    },
    {
      name: 'Whatever People Say I am, Thats What I\'m Not' ,
      artist: 'Arctic Monkeys',
      releaseYear: 2006,
      coverPic: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Whatever_People_Say_I_Am%2C_That%27s_What_I%27m_Not.jpg',
      tracks: [
        'The View from the Afternoon',
        'I Bet You Look Good on the Dancefloor',
        'Fake Tales of San Francisco',
        'Dancing Shoes',
        'You Probably Couldn\'t See for the Lights But You Were Staring Straight at Me',
        'Still Take You Home',
        'Riot Van',
        'Red Light Indicates Doors Are Secured',
        'Mardy Bum',
        'Perhaps Vampires Is a Bit Strong But...',
        'When the Sun Goes Down',
        'From the Ritz to the Rubble',
        'A Certain Romance'
      ],
      genres: ['indie rock', 'punk rock'],
      spotifyMonthlyPlays: 10061419,
      label: 'Domino Record Company'
    },
    {
      name: 'Dark Was the Yearling',
      artist: 'The Bones of J.R. Jones',
      releaseYear: 2014,
      coverPic: 'https://f4.bcbits.com/img/a0478417126_16.jpg',
      tracks: ['Dreams to Tell',  'Good Friend of Mine', 'Ticket Home', 'The Dark', 'Fury of the Light', 'The Plan', 'This Fire'],
      genres: ['Folk'],
      spotifyMonthlyPlays: 1000000,
      label: 'J.R. Jones'
    },
    {
      name: 'Based on a True Story',
      artist: 'Fat Freddys Drop',
      releaseYear: 2005,
      coverPic: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Based_on_a_True_Story_%28Fat_Freddy%27s_Drop_album%29.jpg/220px-Based_on_a_True_Story_%28Fat_Freddy%27s_Drop_album%29.jpg',
      tracks: [
        'This Room',
        'Ernie',
        'Cay\'s Crays',
        'This Room',
        'Ray Ray',
        'Dark Days',
        'Flashback',
        'Roady',
        'Wandering Eye',
        'Del Fuego',
        'Hope'
      ],
      genre: [
        'Dub',
        'Regggae',
        'Rhythm and Blues',
        'Jam band'
      ],
      spotifyMonthlyPlays: 590160,
      label: 'The Drop'
    },
    {
      name: 'The Artist in the Ambulance',
      artist: 'Thrice',
      releaseYear: 2003,
      coverPic: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Thrice_-_The_Artist_in_the_Ambulance_cover.jpg',
      tracks: [
        'Cold Cash and Colder Hearts',
        'Under a Killing Moon',
        'All That\'s Left',
        'Silhouette',
        'Stare at the Sun',
        'Paper Tigers',
        'Hoods and Perigrine',
        'The Melting Point of Wax',
        'Blood Clots and Black Holes',
        'The Artist in the Ambulance',
        'The Abolition of Man',
        'Don\'t Tell and We Won\'t Ask'
      ]
    },
    {
      name: 'I Put a Spell on You',
      artist: 'Nina Simone' ,
      releaseYear: 1965,
      coverPic: 'https://img.discogs.com/5UzVkJ-sHfMRqUsw2BtkJQPX5l4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1337678-1472514305-4913.png.jpg',
      tracks: ['I Put a Spell on You', 'Tomorrow is My Turn', 'Ne Me Quitte Pas', 'Marriage is for Old Folks'],
      genres: ['Rhythm and Blues', 'Jazz', 'Blues', 'Soul music'],
      spotifyMonthlyPlays: 3017880 ,
      label: 'Bethlehem'
    },
    {
      name: 'The Dark Side of the Moon',
      artist: 'Pink Floyd',
      releaseYear: 1973,
      coverPic: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png',
      tracks: [
        'Breathe',
        'Time',
        'Money',
        'The Great Gig in the Sky',
        'Us and Them',
        'Eclipse'
      ],
      genres: [
        'Progressive Rock',
        'Classic Rock'
      ],
      spotifyMonthlyPlays: 8500000,
      label: 'Harvest'
    }
  ])
  .then(albums => console.log(`Created ${albums.length} albums`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
