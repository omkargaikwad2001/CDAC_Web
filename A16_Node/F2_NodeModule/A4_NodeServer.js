var http = require('http')

var server = http.createServer((req,res)=>{

    console.log("Request processing...");
    res.writeHead(200, {"content-type":"text/html"});
    res.write("<h1>Hello From Node js</h1>");
    res.end();

})

server.listen(9000,()=>{
    console.log("Server started on port 9000");
})