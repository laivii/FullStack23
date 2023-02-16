var fs = require("fs");

fs.openSync("./uusiFile.txt", "a+");

var data = fs.readFileSync('./example.txt');
var data2 = fs.readFileSync('./example2.txt');

fs.writeFileSync('uusiFile.txt', data);
fs.appendFileSync('uusiFile.txt', data2);

var uusiData = fs.readFileSync("./uusiFile.txt");
console.log(uusiData.toString());