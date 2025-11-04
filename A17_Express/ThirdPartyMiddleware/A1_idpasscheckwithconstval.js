var exp = require("express");
var bp = require("body-parser");
var app = exp();

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/A1_Login.html");
})

app.use(bp.urlencoded({ "extended": false }));

app.post("/logincheck", (req, res) => {

    let user = req.body.user;
    let pass = req.body.pass;

    if (user == "omkar" && pass == "omkar123") {
        res.send("Login successful");
    }
    else {
        res.send(`<h3 style='color:red;'>Invalid credentials</h3>
            <a href='/login'>Try again</a>`);
    }

})

app.get("/*splat", (req, res) => {
    res.status(404).send("<h1>PAGE NOT FOUND</h1>")
})

app.listen(9000, (req, res) => {
    console.log("Server started on port 9000...");
})