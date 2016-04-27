'use strict';

var shell = require('shelljs');
var cmd = require('./cmd');

// Execute msbuild.exe with passed arguments
module.exports = function exec(args) {
    shell.exec(cmd(args));
}
