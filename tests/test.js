const app = require('../src/index.js');
const assert = require('assert');

assert(app, 'App should export');
assert(typeof app === 'function', 'App should be a function');
console.log('All tests passed');
