var fs = require('fs');
var request = require('request');

var nuget = './nuget.exe';

console.info('Downloading \'nuget.exe\'...');
console.info();

request
    .get('https://dist.nuget.org/win-x86-commandline/v3.4.3/nuget.exe')
    .on('error', function (err) {
        console.error(err);
    })
    .on('response', function (response) {
        if (response.statusCode == 200) {
            console.info('Successfully downloaded \'nuget.exe\'.');
        } else {
            console.error('Downloading \'nuget.exe\' failed. statusCode \'' + response.statusCode + '\'');
        }
    })
    .pipe(fs.createWriteStream(nuget));
