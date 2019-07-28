require("dotenv").config();

const keys = require("./keys");
const Spotify = require("./spotify");
const Concert = require("./concert");
const Movie = require('./movie');

const spotify = new Spotify();
const concert = new Concert();
const movie = new Movie();


const search = process.argv.splice(3).join(' ')

const spotifyObj = {
    type: "track",
    query: search,
    limit: 1
}

const command = process.argv[2];

switch (command) {
    case 'spotify-this-song':
        console.log('\nSearching Spotify for ' + search + '.....\n')
        spotify.spotifySearch(spotifyObj);
        break;
    case 'concert-this':
        console.log('\nSearching concerts for ' + search + '.....\n')
        concert.concertSearch(search)
        break;
    case 'movie-this':
        console.log('\nSearching movies for ' + search + '.....\n')
        movie.movieSearch(search)
        break;
    default:
        console.log('Enter a command');
}


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



