function AngularPartialsPlugin(config) {
  this.config = config;
}

AngularPartialsPlugin.prototype.brunchPlugin = true;

AngularPartialsPlugin.prototype.type = 'template';

AngularPartialsPlugin.prototype.extension = 'html';

AngularPartialsPlugin.prototype.compile = function(params, callback) {

};

module.exports = AngularPartialsPlugin;
