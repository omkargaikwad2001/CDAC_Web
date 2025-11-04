var exp = require('express');
var mysql = require('mysql2');

var app = exp();

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"shoppingdb"
})

con.connect((err)=>{

    if(!err){
        console.log("Db connected");
    }
    else{
        console.log("Failed to connect "+err.toString());
    }

})

app.get("/getemps",(req,res)=>{
    
    con.query("select * from users",(err,result)=>{
        console.log(res.length);

        if(!err){

            let str = "<table border=1>";
            result.forEach((val)=>{
                str+="<tr>";
                str+="<td>"+val.u_id+"</td>";
                str+="<td>"+val.password+"</td>";
                str+="</tr>";
            });
            str+="</table>";
            res.send(str);
        }
        else{
            res.status(500).send("Failed to get data");
        }

    })
})

app.all('/*splat',(req,res)=>{
    res.status(404).send("<h1>Page not found</h1>");
})


app.listen(9000,()=>{
    console.log("Server started on port 9000...");
})