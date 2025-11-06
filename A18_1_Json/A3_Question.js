var exp = require("express");
var mysql = require("mysql2");
var cors = require("cors");

var app = exp();
app.use(cors());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "quizdb"
});

con.connect((err) => {
    if (!err) {
        console.log("Connected to database...");
    } else {
        console.log("Unable to connect...");
    }
});

app.get("/questions", (req, res) => {
    res.sendFile(__dirname + "/A3_Question.html");
});

app.get("/getQuestions", (req, res) => {
    let sid = req.query.sid;


    con.query("select q.*,  t.name  from questions q join topics t on q.topicid = t.topicid where q.topicid = ?", [sid], (err, result) => {

        if (!err) {
            if (result.length > 0) {
                res.json(result); // send array as JSON
            } else {
                res.json([]); // send empty array
            }
        } else {
            console.error(err);
            res.status(500).send("<h3>Error fetching questions</h3>");
        }
    });
});

app.listen(9000, () => {
    console.log("Server started on port 9000...");
});
