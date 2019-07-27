var SpotifyAPI = require("node-spotify-api");

const keys = require("./keys");
const spotify = new SpotifyAPI(keys.spotifyKey);

var Spotify = function () {
    this.spotifySearch = function (obj) {
        spotify.search(obj, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            const response = data.tracks.items[0];

            const artist = response.artists[0].name;
            const name = response.name;
            const externalURL = response.external_urls.spotify;
            const previewURL = response.preview_url
            const album = response.album.name;

            const printStats = () => {
                console.log('Artists: ' + artist);
                console.log('Song: ' + name);
                previewURL === null ? console.log("No song preview available") : console.log('Preview: ' + previewURL);
                console.log('Open Spotify: ' + externalURL);
                console.log('Album: ' + album);
            }
            printStats();

        });
    }
}

module.exports = Spotify;