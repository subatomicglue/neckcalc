////////////////////////////////////////////////
// polyfills must come first
require('babel-polyfill'); // for ie11 and for loops
// polyfill for new URL(), on IE11
// prevents error "Object doesn't support this action"
require("url-polyfill/url-polyfill.min.js");
////////////////////////////////////////////////

// let moment = require( "moment" );
// let xhr = require( "./xhr" ).xhr;
// let xhrAuth = require( "./xhr" ).xhrAuth;
require('bootstrap/dist/css/bootstrap.min.css');
require('./style.css');
//require('./fonts/microgramma-dbol-ext-regular.css');
//require('./fonts/microgramma-ef-ext-medium.css');
// require('./fonts/roboto-light.css');
// require('./fonts/roboto-medium.css');
//require('./fonts/roboto-regular.css');
// require('./fonts/material-icons.css');

// default to development mode e.g. npm start
// build production with NODE_ENV=production webpack, webpack hands this variable down
const env = `${process.env.NODE_ENV ? process.env.NODE_ENV : "development"}`;
console.log( `ENVIRONMENT: ${env}` );


let config = __API__;

console.log( `config:`)
console.log( config );



