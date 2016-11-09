'use strict';

const generators = require('yeoman-generator');
const assign = require('object.assign').getPolyfill();
const basicModulesPath = 'src/modules';

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
    this.props = {};
    this.props = assign(this.props, this.options);
  },

  prompting: function () {
    return this.prompt([{
      type    : 'input',
      name    : 'module',
      message : 'What is the name of your new module?',
      default : 'new_module' // Default to current folder name
    }, {
      type    : 'input',
      name    : 'section',
      message : 'What is the name of the basic section?',
      default : 'new_section'
    }, {
      type    : 'input',
      name    : 'path',
      message : 'What is the name of the route?',
      default : 'new_route'
    }, {
      type    : 'input',
      name    : 'type',
      message : 'What is the name of the layout type?',
      default : 'backend'
    }]).then(function (answers) {
      this.props = assign(this.props, answers);
      this.props['_module'] = this.props.module.capitalizeFirstLetter();
      this.props['_section'] = this.props.section.capitalizeFirstLetter();
      this.props['_type'] = this.props.type.capitalizeFirstLetter();
    }.bind(this));
  },

  writing: function () {
    // Generating the new react module from the sample
    this.log('Generating module directory ...');

    // /actions
    this.fs.copyTpl(
      this.templatePath('actions/<%=module%>.js'),
      this.destinationPath(basicModulesPath, this.props.module, 'actions', this.props.module + '.js'),
      this.props
    );

    // /components
    this.fs.copyTpl(
      this.templatePath('components/<%=module%>.jsx'),
      this.destinationPath(basicModulesPath, this.props.module, 'components', this.props.module + '.jsx'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('components/<%=section%>.jsx'),
      this.destinationPath(basicModulesPath, this.props.module, 'components', this.props.section + '.jsx'),
      this.props
    );

    // /containers
    this.fs.copyTpl(
      this.templatePath('containers/<%=module%>.js'),
      this.destinationPath(basicModulesPath, this.props.module, 'containers', this.props.module + '.js'),
      this.props
    );

    // /styles
    this.fs.copyTpl(
      this.templatePath('styles/<%=module%>.scss'),
      this.destinationPath(basicModulesPath, this.props.module, 'styles', this.props.module + '.scss'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('styles/<%=section%>.scss'),
      this.destinationPath(basicModulesPath, this.props.module, 'styles', this.props.section + '.scss'),
      this.props
    );

    // /
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(basicModulesPath, this.props.module, 'index.js'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('routes.jsx'),
      this.destinationPath(basicModulesPath, this.props.module, 'routes.jsx'),
      this.props
    );

  },

  end: function() {
    // NOTE (EK): Added this as a hack to stop the CLI from
    // hanging when generating a service with a model.
    process.exit();
  }
});
