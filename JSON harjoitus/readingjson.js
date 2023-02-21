var http = require('http');
var fs = require('fs');

var data = fs.readFileSync('./sampledata.json', (err) => {
    if (err) throw err;
});

data = data.toString();
data = JSON.parse(data);

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("<table border='1'><tr><th>NAME</th><th>AGE</th><th>COMPANY</th><th>ADDRESS</th></tr>")
    for (let i = 0; i < data.length; i++){
        var person = data[i];
        res.write("<tr><td>" + person.name + "</td><td>" + person.age + "</td><td>" + person.company + "</td><td>" + person.address + "</td></tr>");
    }
    res.write("</table>");
    res.end();
}).listen(8080);