const fs = require('fs');
const request = require('request');

const nuget = './nuget.exe';

console.info(`Downloading 'nuget.exe'...`);
console.info();

request
    .get('https://dist.nuget.org/win-x86-commandline/latest/nuget.exe')
    .on('error', function (err) {
        console.error(err);
    })
    .on('response', function (response) {
        if (response.statusCode == 200) {
            console.info(`Successfully downloaded 'nuget.exe'.`);
        } else {
            console.error(`Downloading 'nuget.exe' failed. statusCode '${response.statusCode}'`);
        }
    })
    .pipe(fs.createWriteStream(nuget));
