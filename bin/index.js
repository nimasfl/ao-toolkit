#!/usr/bin/env node
const yargs = require('yargs');
const generate = require("../lib/generate");

const argv = yargs
  .usage('Usage: $0 [commands]')
  .command(['generate <template> <component>', 'g'], 'generates a named template', () => {}, (args) => {
    generate(args.template, args.component)
  })
  .help('h')
  .alias('h', 'help').argv;

if (!argv._.length) {
  console.error('You need to specify an argument for this command to execute.');
  process.exit(0);
}
