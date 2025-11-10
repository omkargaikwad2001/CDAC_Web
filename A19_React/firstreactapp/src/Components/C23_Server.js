var exp = require("express");
var mysql = require("mysql2");
var cors = require("cors");

var app = exp();

app.use(cors());

var con = mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    database: "knowit"
});

con.connect((err) => {
    if (!err) {
        console.log("Connected to DB");
    }
    else {
        console.log("Cannot connect to DB");
    }
})

// app.use("/getemps", (req, res) => {

//     con.query("select * from emp", (err, result) => {

//         if (err) {
//             res.send("Query error...");
//             return;
//         }

//         if (result.length) {

//             let str = `<table border='1' cellpadding='8' cellspacing='0'>
//                         <tr>
//                             <th>Emp No</th>
//                             <th>Name</th>
//                             <th>Job</th>
//                             <th>Salary</th>
//                         </tr>`;

//             result.forEach((v) => {
//                 str += `
//                     <tr>
//                         <td>${v.EMPNO}</td>
//                         <td>${v.ENAME}</td>
//                         <td>${v.JOB}</td>
//                         <td>${v.SAL}</td>
//                     </tr>
//                 `;
//             });

//             str += `</table>`; // close table

//             res.send(str);
//         }
//         else {
//             res.send("Data not found...");
//         }

//     });

// });

app.use("/getemps", (req, res) => {

    con.query("select * from emp", (err, result) => {

        if (err) {
            res.send("Query error...");
            return;
        }

        if (result.length) {
            res.json(result);
        } else {
            res.send("Data not found...");
        }

    });

});


app.listen(9000, () => {
    console.log("Server started on port 9000");
});
