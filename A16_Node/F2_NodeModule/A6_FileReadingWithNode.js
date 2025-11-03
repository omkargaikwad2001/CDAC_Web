let http = require('http')
let url = require('url')
let fs = require('fs')

let server = http.createServer((req,res)=>{
    let url_part = url.parse(req.url,true);
    var pathname = url_part.query.pathname;
    var fname = pathname.substring(1);
    
    fs.readFile(fname,(err,data)=>{
        if(!err){
            res.writeHead(200, { "content-type": "text/html" });
            res.write(data.toString());
            res.end();
        }
        else{
            res.writeHead(200,{"content-type":"text/html"})
            res.write(err.toString());
            res.end();
        }
    })

})

server.listen(9000,()=>{
    console.log("Server Started on port 9000...");
})
