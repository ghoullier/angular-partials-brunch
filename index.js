var fs = require("fs");
var fspath = require("path");
var mkdirp = require("mkdirp");

function AngularPartialsPlugin(config) {
  this.config = config;
  this.publicPath = fspath.resolve(config.paths['public']);
}

AngularPartialsPlugin.prototype.brunchPlugin = true;

AngularPartialsPlugin.prototype.type = 'template';

AngularPartialsPlugin.prototype.extension = 'html';

AngularPartialsPlugin.prototype.compile = function(data, path, callback) {
  var destinationPath = fspath.join(this.publicPath, path.replace('app/', ''));
  var destinationDir = fspath.dirname(destinationPath);
  mkdirp.sync(destinationDir);
  return fs.writeFileSync(destinationPath, data);
};

module.exports = AngularPartialsPlugin;
