require("dotenv").config();

const keys = require("./keys");
const Spotify = require("./spotify");

var spotify = new Spotify(keys.spotifyKey);

const spotifyObj = {
    type: "track",
    query: process.argv.splice(3).join(' '),
    limit: 1
}

const command = process.argv[2];

switch (command) {
    case 'spotify-this-song':
        console.log('\nSearching Spotify for ' + process.argv[3] + '.....\n')
        spotify.spotifySearch(spotifyObj);
        break;
    default:
        console.log('Enter a command');
}


// concert-this
// node liri.js concert-this <artist/band name here>

// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")

// ----------------------------------------------------------------------------

// spotify-this-song
// node liri.js spotify-this-song '<song name here>'

// If no song is provided then your program will default to "The Sign" by Ace of Base.


const spotifySearch = key => {
    spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data);
    });
}
// spotifySearch(spotify);


// ----------------------------------------------------------------------------

// movie-this
// node liri.js movie-this '<movie name here>'


// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.


// ----------------------------------------------------------------------------

// do-what-it-says
// node liri.js do-what-it-says



