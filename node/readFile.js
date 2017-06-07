var fs = require('fs');
//console.log(fs); 0.0.2
//console.log( fs.existsSync('readFe.js') );
/*console.log('------');
fs.readFile('readFile.js', "utf-8", function(error, data) {
  if (error) {
    throw error;
  }
  var content = data.replace('@VERSION@', "0.0.1");
  fs.writeFile('readFile.js', content);
});*/

exports.replaceVersion = function(path, version) {
  if (!path) return console.log('no path');

  fs.readFile(path, "utf-8", function(error, data) {
    if (error) {
      throw error;
    }
    var content = data.replace('@VERSION@', version || "0.0.1");
    fs.writeFile(path, content);
  });
};
