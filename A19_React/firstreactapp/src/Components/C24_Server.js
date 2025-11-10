var exp = require('express');
var mysql = require('mysql2');
var cors = require('cors');
var bp = require('body-parser');

var app = exp();
app.use(cors());
app.use(bp.json()); 

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"knowit"
});

con.connect((err)=>{
    if(err){
        console.log("Cannot connect to db");
        return;
    }
    else{
        console.log("Connected to db");
    }
});

// ------------------- FETCH ALL EMPLOYEES -------------------

app.get("/getallemps",(req,res)=>{

    con.query("select * from emp",(err,result)=>{

        if(err){
            res.status(500).send("Query Error");
            return;
        }

        if(result.length){
            res.json(result);
        }
        else{
            res.send("Data not found");
        }

    });

});

// ------------------- INSERT EMPLOYEE -------------------

app.post("/insertEmp",(req,res)=>{

    let { empno, ename, job, mgr, hiredate, sal, comm, deptno } = req.body;

    let sql = "insert into emp (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (?,?,?,?,?,?,?,?)";

    con.query(sql,[empno,ename,job,mgr,hiredate,sal,comm,deptno],(err,result)=>{

        if(err){
            console.log(err);
            res.status(500).send("Insert Failed");
        }
        else{
            res.send("Employee Inserted Successfully");
        }
    });

});

app.listen(9000,()=>{
    console.log("Server started on port 9000");
});
