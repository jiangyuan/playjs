var co = require('co');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

co(function* () {
  let data = yield fs.readFileAsync('./__dirname/index.js');
  yield fs.writeFileAsync('./backup/co.js', data);
  return 'done';
}).then(function(result) {
  console.log(result);
}).catch(function(err) {
  console.log(err);
});