const fs = require('fs');
const path = require('path');

const PATH_ENTRY = path.join(__dirname, 'styles/index.ts');

fs.renameSync(PATH_ENTRY, path.join(__dirname, 'styles/main.ts'));
fs.renameSync(path.join(__dirname, 'styles/index-example.ts'), PATH_ENTRY);
