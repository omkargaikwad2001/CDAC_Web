var exp = require("express");
var mysql = require("mysql2");
var bp = require("body-parser");

var app = exp();
app.use(bp.urlencoded({ extended: false }));

// Database connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "knowit"
});

con.connect((err) => {
    if (!err)
        console.log("Connected with DB...");
    else
        console.log("Cannot connect with DB...");
});

// Serve HTML page
app.get("/empbydeptform", (req, res) => {
    res.sendFile(__dirname + "/A2_DeptEmp.html");
});

// ✅ POST route for AJAX
app.post("/empbydept", (req, res) => {
    var deptno = req.body.deptno;
    console.log("Received Dept No:", deptno);

    con.query("SELECT * FROM emp WHERE deptno = ?", [deptno], function (err, result) {
        if (err) {
            res.status(500).send("<h3>Error fetching data</h3>");
            return;
        }

        if (result.length > 0) {
            var html = "<table border='1' cellspacing='0' cellpadding='8'>";
            html += "<tr><th>Emp No</th><th>Name</th><th>Job</th><th>Salary</th><th>Dept No</th></tr>";

            result.forEach(emp => {
                html += `<tr>
                            <td>${emp.EMPNO}</td>
                            <td>${emp.ENAME}</td>
                            <td>${emp.JOB}</td>
                            <td>${emp.SAL}</td>
                            <td>${emp.DEPTNO}</td>
                         </tr>`;
            });

            html += "</table>";
            res.send(html);
        } else {
            res.send(`<h3>No employees found in Department ${deptno}</h3>`);
        }
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).send("<h1>PAGE NOT FOUND</h1>");
});

app.listen(9000, () => {
    console.log("Server started on port 9000...");
});
