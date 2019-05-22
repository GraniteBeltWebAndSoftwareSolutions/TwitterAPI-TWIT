console.log('The Bot is starting');

var Twit = require('twit');

var config = require('./config');

console.log(config);

var T = new Twit(config);









T.get('search/tweets', { q: 'kurtcobain since:2011-07-11', count: 100 }, function(err, data, response) {
  console.log(data)
})