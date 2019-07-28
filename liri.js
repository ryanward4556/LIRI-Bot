require("dotenv").config();

const fs = require("fs");
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
        if (search === undefined || search === "") {
            spotifyObj.query = "Es Gratis";
            spotify.spotifySearch(spotifyObj);
        } else {
            spotify.spotifySearch(spotifyObj);
        }
        break;
    case 'concert-this':
        console.log('\nSearching concerts for ' + search + '.....\n\n----------------------------------------\n')
        concert.concertSearch(search)
        break;
    case 'movie-this':
        console.log('\nSearching movies for ' + search + '.....\n')
        movie.movieSearch(search)
        break;
    case 'do-what-it-says':
        fs.readFile('./random.txt', "utf8", function (err, data) {
            if (err) throw err;
            spotifyObj.query = data;
            console.log('\nSearching Spotify for ' + data + '.....\n')
            spotify.spotifySearch(spotifyObj);
        });
        break;
    default:
        console.log('Enter a command');
}

const appendSearch = (command, search) => {
    fs.appendFile("searches.txt", "\n" + command + ": " + search, function (err) {
        if (err) {
            console.log(err);
        }
    });
}
appendSearch(command, search);









