var fs = require('fs');


var _co = co(function* () {
  var data = yield readFile('./__dirname/index.js');
  var result = yield writeFile('./backup/generator.js', data);
  return 'done';
});

_co(function(err, result) {
  if (err) {
    return console.log('11', err);
  }

  console.log('result', result);
});



function readFile(path) {
  return function(callback) {
    fs.readFile(path, 'utf8', callback);
  };
}

function writeFile(path, data) {
  return function(callback) {
    fs.writeFile(path, data, 'utf8', callback);
  };
}

function co(generator) {
  return function(callback) {
    var gen = generator();

    function next(err, result) { // 一直传递
      if (err) {
        return callback(err);
      }

      var step = gen.next(result);

      if (!step.done) {
        step.value(next);
      } else {
        callback(null, step.value);
      }
    }

    next();
  };
}