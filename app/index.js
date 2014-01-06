'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var StylusFrontendGenerator = module.exports = function StylusFrontendGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(StylusFrontendGenerator, yeoman.generators.Base);

StylusFrontendGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'projectName',
    message: 'What is the name of the project?'
  }];

  this.prompt(prompts, function (props) {
    this.projectName = props.projectName;

    cb();
  }.bind(this));
};

StylusFrontendGenerator.prototype.app = function app() {
  this.mkdir('stylus');
  this.mkdir('public');
  this.mkdir('public/css');
  this.mkdir('public/js');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('_Gruntfile.coffee', 'Gruntfile.coffee');
  this.copy('stylus/index.styl', 'stylus/index.styl');
  this.copy('public/_index.html', 'public/index.html');
};

StylusFrontendGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('.gitignore', '.gitignore');
};
