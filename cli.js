#!/usr/bin/env node
/*eslint no-console:0*/
'use strict';
var meow = require('meow');
var runExample = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ run-example [input]',
    '',
    'Examples',
    '  $ run-example',
    '  unicorns & rainbows',
    '',
    '  $ run-example ponies',
    '  ponies & rainbows',
    '',
    'Options',
    '  --foo  Lorem ipsum. Default: false'
  ]
});

console.log(runExample(cli.input[0] || 'unicorns'));
