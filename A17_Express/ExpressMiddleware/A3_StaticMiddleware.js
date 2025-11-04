var exp = require("express");

var app = exp();

app.use(exp.static("Images"));
app.use(exp.static("htmlpages"));
app.use(exp.static("css"));

app.get("/demo",(req,res)=>{
    res.sendFile(__dirname+"/htmlpages/demo.html");
})

app.get("/*splat",(req,res)=>{
    res.status(404).send("<h1>PAGE NOT FOUND</h1>")
})

app.listen(9000,(req,res)=>{
    console.log("Server started on port 9000...");
})