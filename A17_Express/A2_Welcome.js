let exp = require('express');

var app = exp();

app.get("/greet",(req,res)=>{
    res.send("<h1>Welcome to web app</h1>")
})

app.use((req,res)=>{
    res.send("bad request");
})

app.listen(9000,()=>{
    console.log("Listning on port 9000...");    
})