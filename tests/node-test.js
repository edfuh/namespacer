var assert = require('assert'),
    ns = require('../namespacer.js');

ns('EDFUH.is.a.baller');
assert.ok(typeof EDFUH.is.a.baller === 'object');