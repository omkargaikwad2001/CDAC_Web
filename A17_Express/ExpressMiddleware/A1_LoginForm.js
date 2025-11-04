let exp = require('express');

let app = exp();

app.use(exp.static("Images"))
app.get("/login",(req,res)=>{
    
    res.sendFile(__dirname+"/A1_Login.html");

})

app.get("/*splat",(req,res)=>{
    res.status(404).send("<h1>Page not found</h1>");
})

app.listen(9000,()=>{
    console.log("Server started on port 9000...");
})