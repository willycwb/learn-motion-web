
const { gitDescribeSync } = require('git-describe');
const { version } = require('./package.json');
const { resolve, relative } = require('path');
const { writeFileSync } = require('fs-extra');
const gittags = require('git-tags');



gittags.latest(function(err, latest) {
    if(err) throw err;
    const gitInfo = gitDescribeSync({requireAnnotated: true});
    gitInfo.version = version;

    gitInfo.tag = latest;
    const file = resolve(__dirname, 'src', 'environments', 'version.js');
    writeFileSync(file,
`// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
/* tslint:disable */
const VERSION = ${JSON.stringify(gitInfo, null, 2)};
module.exports = VERSION;
/* tslint:enable */`, { encoding: 'utf-8' });
    
    console.log(`Wrote version info ${gitInfo.tag} rev ${gitInfo.hash} to ${relative(resolve(__dirname, '..'), file)}`);
})
