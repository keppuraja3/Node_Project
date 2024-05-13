/*
var http = require("http");

var calc = require("./mycalulator")

calc.calc(10,5);
//Create a server onject: 
http.createServer(function (req, res){
    res.write("Hellow World!");//Write a response to the client
    res.end()//end the response
}).listen(3300);//the server object listens on port 3300

*/

const express = require('express');

const app = express()

//express.static => express build-in middleware
//app.use({})

app.get("/",(req, res)=>{
    res.send("hi")
})
// app.get("*",(req,res)=>{
    //     res.send("Page not found")
// })


app.get("/login",(req,res)=>{
    // const username = req.query.username
    // const password = req.query.password
        // or //
    const username = req.query["username"]
    const password = req.query["password"]

    console.log(username + " "+ password);

    res.send("Received");
})
//Middleware----------------
app.use("/page", express.static(__dirname + '/public'))//
app.use(express.json())//enable the server to parse json data middleware
app.use(express.urlencoded())// middleware

app.post("/login",(req,res)=>{
    // const username = req.body.username
    // const password = req.body.password
            //or
    const username = req.body["username"]
    const password = req.body["password"]

    // console.log(username + " "+ password);
    if(username === "raja" && password === "1234"){
        
        res.send("Login Success")
    }
    else{
        console.log(username);
        console.log(password);
        res.send("Login Failed")
    }
})


app.get("/demo",(req,res)=>{
    res.send("<h1> Hello word</h1>")
})
app.listen(3300,()=>{
    console.log("Server Running Successfully on 3300");
})

