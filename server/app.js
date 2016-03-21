var http = require('http');//required library
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("server is runing");
       res.end("time to close");
    setTimeout(function() {
     
        console.log('closing');
    },1000);
}).listen(8181);
