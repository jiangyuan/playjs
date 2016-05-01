var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

fs.readFileAsync('./http/server.js', 'utf8')
  .then(function(data) {
    return fs.writeFileSync('./backup/bluebird.js', data);
  })
  .then(function() {
    console.log('done');
  })
  .catch(function(err) {
    console.log(err);
  });