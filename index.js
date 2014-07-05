function AngularPartialsPlugin(config) {
  this.config = config;
}

AngularPartialsPlugin.prototype.brunchPlugin = true;

AngularPartialsPlugin.prototype.type = 'template';

AngularPartialsPlugin.prototype.extension = 'html';

AngularPartialsPlugin.prototype.compile = function(data, path, callback) {
  console.log('AngularPartialsPlugin::compile', arguments);
};

module.exports = AngularPartialsPlugin;
