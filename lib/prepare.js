'use strict';

var logger = require('winston');
var path = require('path');
var prettyFormat = require('pretty-format');
var removeTrailingPathSeparator = require('remove-trailing-path-separator');

module.exports = function (input, opts) {
  opts = opts || {};

  if (opts.debug) {
    logger.level = 'debug';
  } else if (opts.verbose) {
    logger.level = 'verbose';
  } else if (opts.info) {
    logger.level = 'info';
  }

  // input;// path/to/target_dir/target_file.js
  var cwd = process.cwd();// /Users/sane/work/js-study/generator-nm
  logger.info(input);
};
