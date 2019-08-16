const fs = require('fs');
const path = require('path');
const pjson = require('./package.json');

const source = __dirname;
const destination = path.join(__dirname, `./build-${pjson.name}-${pjson.version}/`);

fs.copyFileSync(path.resolve(source, 'index.html'), path.resolve(destination, 'index.html'));
if (!fs.existsSync(path.resolve(destination, 'css')))
    fs.mkdirSync(path.resolve(destination, 'css'));
fs.copyFileSync(path.resolve(source, 'css/style.css'), path.resolve(destination, 'css/style.css'));
