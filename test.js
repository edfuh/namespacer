var namespacer = require('./namespacer.js'),
    assert = require('assert');

(function (global) {

    namespacer.bind(global)('EDFUH');
    assert.ok(typeof global.EDFUH !== 'undefined');

    assert.ok(typeof global.EDFUH === 'object');


}(this));