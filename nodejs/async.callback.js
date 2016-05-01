var fs = require('fs');


fs.readFile('./http/server.js', {
  encoding: 'utf8'
}, function(err, data) {
  if (err) {
    return console.log(err);
  }

  if (data) {
    fs.writeFile('./backup/1.js', data, 'utf8', function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('done');
    });
  }
});
