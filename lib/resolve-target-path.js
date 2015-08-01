'use strict';
var Promise = require('es6-promise').Promise;
var path = require('path');
var isFile = require('is-file');
//var isDirectory = require('is-directory');
var removeTrailingPathSeparator = require('remove-trailing-path-separator');
//var mkdirp = require('mkdirp');

var target;
var input;
var cwd;
var parentDir;
var targetFile;
//var defaultTargetDir = 'example';
//var defaultTargetFile = 'example.js';

module.exports = function (value) {
  return new Promise(function (resolve, reject) {
    if(!value.hasOwnProperty('target')) {
      reject(new TypeError('target is required.'));
      return;
    }
    input = value['target'];
    cwd = value['cwd'] || process.cwd();

    target = path.normalize(path.join(cwd, removeTrailingPathSeparator(input)));
    if (isFile.sync(target)) {
      parentDir = path.dirname(target);
      targetFile = path.basename(target);
      resolve({
        parentDir: parentDir,
        targetFile: targetFile
      });
      return;
    }
    reject(new Error('No implementation'));
  });
};
