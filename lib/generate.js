#!/usr/bin/env node
const generator = require('custom-template-generator');
const kebabCase = require("./kebab-case");

module.exports = (template, component) => {
  component = kebabCase(component);
  const componentName = component.split('/')[component.split('/').length - 1];
  let componentPath = component.replace('/' + componentName, '');
  let dest;
  if (componentPath === componentName) {
    dest = process.cwd() + '/src'
  } else {
    dest = process.cwd() + '/src/' + componentPath
  }
  generator({
    componentName,
    customTemplatesUrl: './templates/',
    dest,
    templateName: template,
    autoIndent: false,
  });
}
