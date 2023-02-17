var http = require('http');
var url = require('url');
var fs = require('fs');

var routes = {
    '/summer.html' : './summer.html',
    '/winter.html' : './winter.html',
    '/sampledata.json' : './sampledata.json',
    '/plaintext.txt' : './plaintext.txt',
    '/' : 'none'
}

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var name = q.pathname;

    if (name in routes){
        var filename = routes[name];
        console.log(filename, "route is valid");

        fs.readFile(filename, function (err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type' : 'text/html'});
                return res.end("404 NOT FOUND");
            }
            res.writeHead(200, {'Content-Type' : 'text/html'});

            if (filename == 'none'){
                return res.end("Nothing to see here");
            }

            res.write(data);
            return res.end();
        });
    } else {
        console.log(name, "invalid route");
    }
}).listen(8080);