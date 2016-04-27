'use strict';

var path = require('./path');

// Create msbuild.exe command with passed arguments
module.exports = function cmd(args) {
    return path() + ' ' + args
}
