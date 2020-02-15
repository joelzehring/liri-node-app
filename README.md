# liri-node-app
Language interpretation and recognition interface for music and movie info

Search for upcoming shows, recorded songs, or movies all from the comfort of the command line through node.js.

## Project Structure

All logic lives in a simple `liri.js` file. API calls for different services all live in this file. From the commandline, entering "node", then a type of search like `spotify-this-song`, then the title of a song in quotation marks will return info right in the terminal.

## Installation Instructions

1. Install [node.js](https://nodejs.org).
2. Clone this repo to the directory of your choice.
3. Navigate to the directory through the command line and run `npm install` to install dependencies:
* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
* [Axios](https://www.npmjs.com/package/axios)
* [Moment](https://www.npmjs.com/package/moment)
* [DotEnv](https://www.npmjs.com/package/dotenv)

4. Once npm finishes, it's time to run some searches! 
* `node liri.js concert-this <artist/band name here>`
* `node liri.js spotify-this-song "<song name here>"`
* `node liri.js movie-this "<movie title here>"`
* `node liri.js do-what-it-says`


