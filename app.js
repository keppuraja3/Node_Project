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

const { error } = require('console');
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

const multer = require('multer')
const path  = require('path')

// Multer function configuration-
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        if(path.extname(file.originalname)=='.jpg'){
            cb(null, './public/data/uploads/')
        }
        else{
            console.log("file format only in .jpg");
            // req.status(200).send("file format only in .jpg");
        }
    },
    filename: function (req,file,cb){
        cb(null, Date.now()+path.extname(file.originalname))// Appending extension
    }
})

const uploader = multer({storage: storage})


app.post('/upload/file', uploader.single('Upload_File'),(req,res)=>{
    
    console.log("file--------",req.file);
    console.log("body---------",req.body);
    res.status(200).send("File Uploaded Sucessfully....!")
})

app.post('/upload/files',uploader.array("Upload_File",10),(req,res)=>{
    console.log("file--------",req.file);
    console.log("body---------",req.body);
    res.status(200).send("Multiple files uploaded successfully")
} )








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

