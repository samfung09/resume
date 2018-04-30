const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req,res){
    // console.log(req.url);
    var pathName = '.'+req.url;
    fs.readFile(pathName, function(err, data){
        if(err){
            res.write('404');
        }else{
            res.write(data);
        }
        res.end();
    })
})

server.listen(8888);