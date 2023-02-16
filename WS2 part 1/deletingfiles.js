var http = require('http');
var fs = require('fs');

fs.unlink('./uusiFile.txt', (err) => {
    if (err) throw err;
    console.log("poistettu");
});