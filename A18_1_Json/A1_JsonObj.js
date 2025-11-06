var exp = require("express");
var cors = require("cors");

var app = exp();
app.use(cors());

//this is js object
// var employees = [
//     {
//         empid: 100,
//         name: "Omkar",
//         salary: 8000,
//         deptno: 10,
//         isManager: true,
//         contact: [123, 456, 789]
//     },
//     {
//         empid: 101,
//         name: "Rahul",
//         salary: 9000,
//         deptno: 20,
//         isManager: false,
//         contact: [111, 222, 333]
//     }
// ];


var employees = '[{"empid":100,"name":"Omkar","salary":8000,"deptno":10,"isManager":true,"contact":[123,456,789]},{"empid":101,"name":"Rahul","salary":9000,"deptno":20,"isManager":false,"contact":[111,222,333]}]';

console.log(employees);

app.get("/emp",(req,res)=>{
    res.sendFile(__dirname+"/A1_EmpData.html");
});

app.get("/empinfo", (req, res) => {
    // res.json(employees);
    res.json(JSON.parse(employees));
});

app.listen(9000, () => {
    console.log("Server started on port 9000...");
});
