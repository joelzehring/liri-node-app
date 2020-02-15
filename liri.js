require("dotenv").config();
var axios = require("axios");
var moment = require("moment");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var arg = process.argv[3];

// Node argument commands:
//
//***** concert-this *****
// `node liri.js concert-this <artist/band name here>`
//   * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
//   * Name of the venue
//   * Venue location
//   * Date of the Event (use moment to format this as "MM/DD/YYYY")
if (command === "concert-this") {
  axios.get("https://rest.bandsintown.com/artists/" + arg + "/events?app_id=codingbootcamp")
  .then(function(response) {
    for (var i of response.data) {
      console.log(i.venue.name + ", " + i.venue.city + ", " + i.venue.country + ", " + moment(i.datetime).format("MM/DD/YYYY"));
    }
  });
}

//***** spotify-this-song *****
// `node liri.js spotify-this-song '<song name here>'`
//   * This will show the following information about the song in your terminal/bash window
//     * Artist(s)
//     * The song's name
//     * A preview link of the song from Spotify
//     * The album that the song is from
//   * If no song is provided then your program will default to "The Sign" by Ace of Base.
else if (command === "spotify-this-song") {
  spotify.search({type: "track", query: arg, limit: 1}, function(err,data) {
    if (err) {
      return console.log("Error occured: " + err);
    }

    var info = data.tracks.items[0];
    console.log("Artist(s): ");
    for (var i of info.artists) {
      console.log("  " + i.name);
    }
    console.log("Song name: " + info.name);
    console.log("Song preview: " + info.preview_url);
    console.log("Album: " + info.album.name);
  });
}

//***** movie-this *****
// `node liri.js movie-this '<movie name here>'`
//   * This will output the following information to your terminal/bash window:
//     * Title of the movie.
//     * Year the movie came out.
//     * IMDB Rating of the movie.
//     * Rotten Tomatoes Rating of the movie.
//     * Country where the movie was produced.
//     * Language of the movie.
//     * Plot of the movie.
//     * Actors in the movie.
//   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


//***** do-what-it-says *****
// `node liri.js do-what-it-says`
//   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
//     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
//     * Edit the text in random.txt to test out the feature for movie-this and concert-this.

