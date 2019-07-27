const axios = require('axios');
const moment = require('moment');
const keys = require("./keys");

const concertKey = keys.concert;

var Concert = function () {
    this.concertSearch = function (artist) {

        const queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + concertKey;

        axios.get(queryURL).then(
            function (response) {
                for (let i = 0; i < 5; i++) {
                    // console.log(response.data[i])
                    const lineup = response.data[i].lineup;
                    const venueName = response.data[i].venue.name;
                    const venueCity = response.data[i].venue.city;
                    const venueState = response.data[i].venue.region;
                    const date = moment(response.data[i].datetime).format('MM/DD/YYYY');

                    console.log(`
                    Lineup: ${lineup}
                    Venue: ${venueName}
                    Location: ${venueCity + ', ' + venueState}
                    Date: ${date}
                    `)

                }

            }
        )
    }
}

module.exports = Concert;