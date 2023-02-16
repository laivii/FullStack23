var fs = require("fs");

fs.openSync("./uusiFile.txt", "a+");

var data = fs.readFileSync('./example.txt');
data += fs.readFileSync('./example2.txt');

fs.writeFileSync('uusiFile.txt', data, (err) => {
    if (err) throw err;
    console.log("Yhdistelmätiedosto on tallennettu...");
});

fs.appendFile('uusiFile.txt', "I wrote this", (err) => {
    if (err) throw err;
    console.log("lisätty");
});