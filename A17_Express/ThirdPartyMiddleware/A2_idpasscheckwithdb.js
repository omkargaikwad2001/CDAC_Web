const exp = require("express");
const bp = require("body-parser");
const mysql = require("mysql2");

const app = exp();

app.use(bp.urlencoded({ extended: false }));

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "shoppingdb",
});

con.connect((err) => {
    if (!err) {
        console.log("Connected to MySQL...");
    } else {
        console.log("Database connection failed:", err);
    }
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/A1_Login.html");
});

app.post("/logincheck", (req, res) => {
    const user = req.body.user;
    const pass = req.body.pass;

    const sql = "SELECT * FROM users WHERE u_id = ? AND password = ?";
    con.query(sql, [user, pass], (err, result) => {
        if (err) {
            console.error("Query failed:", err);
            res.send("<h1>Database error...</h1>");
        } else {
            if (result.length > 0) {
                res.write("<h1>Login Success...</h1>");
                res.write(`<h2>Welcome ${user}</h2>`);
                res.end();
            } else {
                res.write("<h1>Invalid Username or Password</h1>");
                res.end();
            }
        }
    });
});

app.use((req, res) => {
    res.status(404).send("<h1>PAGE NOT FOUND</h1>");
});

app.listen(9000, () => {
    console.log("Server started on port 9000...");
});
