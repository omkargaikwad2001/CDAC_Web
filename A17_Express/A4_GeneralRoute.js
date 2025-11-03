let exp = require('express');

let app = exp();

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Express</h1>")
})

app.get("/*splat",(req,res)=>{
    res.status(404).send("Not found");    
})

app.listen(9000,()=>{
    console.log("Server started on port 9000...");
})