var exp = require("express");
var bp = require("body-parser");
var mysql = require("mysql2");
var app = exp();

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "shoppingdb",
})

con.connect((err) => {
    if (!err) {
        console.log("Connected");
    }
    else {
        console.log("Not able to connect connect");
    }
})

app.use(bp.urlencoded({ "extended": false }));

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/A3_Register.html");
})

app.post("/registerValidate", (req, res) => {

    let uid = req.body.fname;
    let fname = req.body.fname;
    let mname = req.body.mname;
    let lname = req.body.lname;
    let email = req.body.email;
    let mob = req.body.mob;
    let pass = req.body.pass;

    let str = "insert into users values(?,?,?,?,?,?,?)";

    con.query(str, [uid, pass, fname, mname, lname, email, mob], (err, result) => {
        if (!err) {
            if (result.affectedRows > 0) {
                res.send("<h2>Registration successful!</h2>");
            } else {
                res.send("<h2>Failed to register user.</h2>");
            }
        } else {
            console.error(err);
            res.send("<h2>Something went wrong. Please try again.</h2>");
        }

    })

})

app.get("/*splat", (req, res) => {
    res.status(404).send("PAGE NOT FOUND");
})

app.listen(9000, () => {
    console.log("Server started on port 9000...");
})