'use strict';

const path = require('./path');

// Create msbuild.exe command with passed arguments
module.exports = function cmd(args) {
    return `${path()} ${args}`
}
