const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regexOm = /<div class="pooja-card-ornament top-left"><i class="fas fa-om"[^>]*><\/i><\/div>/g;
const regexBell = /<div class="pooja-card-ornament top-right"><i class="fas fa-bell"[^>]*><\/i><\/div>/g;

html = html.replace(regexOm, '');
html = html.replace(regexBell, '');

fs.writeFileSync('index.html', html);
