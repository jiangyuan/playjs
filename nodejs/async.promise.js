var fs = require('fs');

function readFile(path) {
  var promise = new Promise(function(resolve, reject) {
    fs.readFile(path, 'utf8', function(err, data) {
      if (err) {
        return reject(err);
      }

      resolve(data);
    });
  });

  return promise;
}

function writeFile(path, data) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(path, data, 'utf8', function(err) {
      if (err) {
        return reject(err);
      }

      resolve(data);
    });
  });
}

readFile('./http/server.js')
  .then(function(data) {
    return writeFile('./backup/2.js', data);
  })
  .then(function() {
    console.log('done');
  })
  .catch(function (params) {
    console.log(params);
  });