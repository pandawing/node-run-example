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
},
  {
    default: {
      info: true,
      verbose: false,
      debug: false
    }
  }
);

runExample.runExample(cli.input[0] || '', cli.flags);
