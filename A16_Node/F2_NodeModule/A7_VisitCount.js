const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url_parts = url.parse(req.url, true);
    const pathname = url_parts.query.pathname;

    if (!pathname) {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h3>Please specify ?pathname=/visit.txt</h3>");
        res.end();
        return;
    }

    const fname = pathname.substring(1);

    fs.readFile(fname,(err, data) => {
        if (err) {
            res.writeHead(200, { "content-type": "text/html" });
            res.write(err.toString());
            res.end();
        } else {

            let parts = data.split('=');
            let count = parseInt(parts[1]);

            if (isNaN(count)) count = 0;

            count++;

            const updatedData = `visitCount = ${count};`;

            fs.writeFile(fname, updatedData, (err2) => {
                res.writeHead(200, { "content-type": "text/html" });
                if (err2) {
                    res.write("<h3>Error updating file</h3>");
                } else {
                    res.write(`<h2>Welcome! Visit Count: ${count}</h2>`);
                }
                res.end();
            });
        }
    });
});

server.listen(9000, () => {
    console.log("Listening on port 9000...");
});
