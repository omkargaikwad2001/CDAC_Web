let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res) => {

    let str = req.url + " at " + new Date() + "\n";

    if (req.url !== '/favicon.ico' && !req.url.startsWith('/.well-known')) {

        fs.appendFile("A8_Log.txt", str, (err) => {

            if (!err) {
                console.log("Log added...");
            }
            else {
                console.log("Log failed to add...");
            }

        })
    }

    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Data logged</h1>");
    res.end();

}).listen(9000, () => {
    console.log("Listning on port 9000");
})