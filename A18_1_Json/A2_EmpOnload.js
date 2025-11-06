var exp = require("express");

var app = exp();

var employees = '[\
    {"empid":100,"name":"Omkar","salary":8000,"deptno":10,"isManager":true,"contact":[123,456,789]},\
    {"empid":101,"name":"Rahul","salary":9000,"deptno":20,"isManager":false,"contact":[111,222,333]},\
    {"empid":102,"name":"Sneha","salary":8500,"deptno":30,"isManager":false,"contact":[999,888,777]},\
    {"empid":103,"name":"Amit","salary":9500,"deptno":40,"isManager":true,"contact":[444,555,666]},\
    {"empid":104,"name":"Priya","salary":8800,"deptno":10,"isManager":false,"contact":[101,202,303]}\
]';

app.get("/emp",(req,res)=>{
    res.sendFile(__dirname+"/A2_EmpOnLoad.html");
})

app.get("/empinfo",(req,res)=>{
    
    res.json(JSON.parse(employees));

})

app.listen(9000,()=>{
    console.log("Server started on port 9000...");
})