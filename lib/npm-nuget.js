'use strict';

const shell = require('shelljs');

module.exports = function start() {
    const nuget = __dirname + '\\..\\nuget.exe';
    const argv = getNuGetArguments();
    
    const cmd = `${nuget} ${argv.join(' ')}`;

    console.log(cmd);
    console.log();
        
    shell.exec(cmd);    
};

// Get the arguments to pass to nuget.
function getNuGetArguments() {
    // process.argv.slice(2) is used because:
    //  
    // process.argv[0] is {path}\node.exe so we ignore it.
    // process.argv[1] is {path}\npm-nuget so we ignore it.
    // process.argv[2 ... n] are the arguments we need to pass nuget
    return process.argv.slice(2); 
}
