let http = require('http');
let url = require('url');

let server = http.createServer((req,res)=>{

    console.log("Request processing...");
    res.writeHead(200,{"content-type":"text\html"});
    var url_parts = url.parse(req.url,true);
    let name = url_parts.query.name;
    res.write(`<h1>Name from queryString = ${name}`);
    res.end();

})

server.listen(9000,()=>{
    console.log("Server started on port 9000...");
})





