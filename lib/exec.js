'use strict';

var shell = require('shelljs');
var cmd = require('./cmd');

// Execute nuget.exe with passed arguments
module.exports = function exec(args) {
    const result = shell.exec(cmd(args)).code;
    if (result !== 0) {
        console.log();
        console.log(`NuGet failed. ERRORLEVEL '${result}'.'`)
        process.exit(result);
    }
    console.log('Successfully completed NuGet command.');
}
