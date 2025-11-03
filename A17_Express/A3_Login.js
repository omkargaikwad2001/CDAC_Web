let exp = require('express');

let app = exp();

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to APP</h1>");
})

app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/A3_Login.html");
})

app.get("/validate",(req,res)=>{

    let user = req.query.user;
    let pass = req.query.pass;

    if(user == "object" && pass == "knowit"){
        res.send(`<h1 style="background-color: green">Login Success...</h1>`)
    }
    else{
        res.send(`<h1 style="background-color: red">Login failed...</h1>`)
    }

})

app.use((req,res)=>{
    res.status(404).send("Bad request");
})

app.listen(9000,()=>{
    console.log("Server started on port 9000");
})