'use strict';

var logger = require('winston');
var path = require('path');
var prettyFormat = require('pretty-format');
var removeTrailingPathSeparator = require('remove-trailing-path-separator');
var Promise = require('es6-promise').Promise;

module.exports = function (input, opts) {
  opts = opts || {};

  if (opts.debug) {
    logger.level = 'debug';
  } else if (opts.verbose) {
    logger.level = 'verbose';
  } else if (opts.info) {
    logger.level = 'info';
  }

  logger.debug('');
  logger.debug('**** prepare ****');
  logger.debug('');
  logger.debug('input:');
  logger.debug(input);
  logger.debug('opts:');
  logger.debug(prettyFormat(opts));

  // input;// path/to/target_dir/target_file.js
  var cwd = process.cwd();// /Users/sane/work/js-study/generator-nm
  logger.info(input);
};
