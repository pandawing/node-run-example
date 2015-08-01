'use strict';
var assert = require('power-assert');
var runExample = require('../');

it('should ', function () {
  assert.strictEqual(runExample.runExample('unicorns'), 'unicorns & rainbows');
});
it('should not ', function () {
  assert.strictEqual(runExample.runExample('unicorns'), 'unicorns & wrong');
});
