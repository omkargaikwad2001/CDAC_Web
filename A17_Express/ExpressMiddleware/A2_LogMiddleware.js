let exp = require('express');
let fs = require('fs');

let app = exp();

app.use((req,res,next)=>{

    let str = req.url+" "+new Date()+"\n";

    fs.appendFile("A2_log.txt",str,(err)=>{
        if(!err){
            console.log("Log added");
        }
        else{
            console.log("Log not added");
        }
    })

    next();

})

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the main page</h1>");
});

app.get("/*splat",(req,res)=>{
    res.status(404).send("<h1>PAGE NOT FOUND</h1>");
})

app.listen(9000,(req,res)=>{
    console.log("Server started on port 9000...");
})