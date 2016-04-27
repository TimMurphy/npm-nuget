'use strict';

var _path = require('path');

// Get full path to nuget.exe
module.exports = function path() {
    return _path.resolve(__dirname,'../nuget.exe');
}
