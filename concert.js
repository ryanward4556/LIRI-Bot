const axios = require('axios');
const moment = require('moment');
const keys = require("./keys");

const concertKey = keys.concertKey.id;

var Concert = function () {
    this.concertSearch = function (artist) {

        const queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + concertKey;

        axios.get(queryURL).then(
            function (response) {
                for (let i = 0; i < 5; i++) {
                    
                    let lineup = response.data[i].lineup;
                    if (lineup.length > 1) lineup = lineup.join(", ");
                    const venueName = response.data[i].venue.name;
                    const venueCity = response.data[i].venue.city;
                    let venueState = response.data[i].venue.region;
                    const date = moment(response.data[i].datetime).format('MM/DD/YYYY');

                    //  If no venue.region (not in USA), swap state with country
                    if (venueState === "") {
                        venueState = response.data[i].venue.country;
                    }

                    console.log(`
                    ----------------------------------------\n
                    Lineup: ${lineup + '\n'}
                    Venue: ${venueName}
                    Location: ${venueCity + ", " + venueState}
                    Date: ${date}
                    `)
                }
            }
        )
    }
}

module.exports = Concert;