const path = require('path');
const dev = process.env.NODE_ENV !== "production";
const dotenv = require('dotenv');

dev ? dotenv.config({ path: `${path.join(__dirname)}/.env.development` }).parsed : dotenv.config().parsed

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}

require("./src/server");
