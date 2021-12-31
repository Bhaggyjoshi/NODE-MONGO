const http = require('http');

http.createServer((req,res)=>{
    if(req.url === "/product"){
        res.write("1000 Products found");
    }else if(req.url ==="/views"){
        res.write("5000 views found");
    }else if(req.url ==="/post"){
        res.write("10000 post found");
    }
    res.end();
}).listen(8000);