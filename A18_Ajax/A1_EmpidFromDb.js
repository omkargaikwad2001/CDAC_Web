var exp = require("express");
var mysql = require("mysql2");
var bp = require("body-parser");

var app = exp();

// Middleware for form data
app.use(bp.urlencoded({ extended: false }));

// Database connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "knowit",
});

con.connect((err) => {
    if (!err)
        console.log("Connected with DB...");
    else
        console.log("Cannot connect with DB...");
});

// Serve HTML page
app.get("/empdata", (req, res) => {
    res.sendFile(__dirname + "/A1_EmpId.html");
});

// ---------- GET route ----------
app.get("/empinfo", (req, res) => {
    var empno = req.query.empno;
    console.log("GET request for Emp No:", empno);

    con.query("SELECT * FROM emp WHERE empno = ?", [empno], function (err, result) {
        if (!err) {
            if (result.length == 1) {
                var str = "";
                str += `<p><b>Name:</b> ${result[0].ENAME}</p>`;
                str += `<p><b>Job:</b> ${result[0].JOB}</p>`;
                str += `<p><b>Salary:</b> ${result[0].SAL}</p>`;
                res.send(str);
            } else {
                res.send("<h3>Employee not found</h3>");
            }
        } else {
            res.status(500).send("Failed to fetch data");
        }
    });
});

// ---------- POST route ----------
app.post("/empinfo", (req, res) => {
    var empno = req.body.empno;
    console.log("POST request for Emp No:", empno);

    con.query("SELECT * FROM emp WHERE empno = ?", [empno], function (err, result) {
        if (!err) {
            if (result.length == 1) {
                var str = "";
                str += `<p><b>Name:</b> ${result[0].ENAME}</p>`;
                str += `<p><b>Job:</b> ${result[0].JOB}</p>`;
                str += `<p><b>Salary:</b> ${result[0].SAL}</p>`;
                res.send(str);
            } else {
                res.send("<h3>Employee not found</h3>");
            }
        } else {
            res.status(500).send("Failed to fetch data");
        }
    });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).send("<h1>PAGE NOT FOUND</h1>");
});

// Start Server
app.listen(9000, () => {
    console.log("Server started on port 9000...");
});
