const fs = require('fs')
const path= require('path')


fs.readFile(path.join(__dirname,'files','demo.txt'),"utf8",(err,data)=>{
    // if(err) throw err;
    err && console.log(err);
    console.log("1. ",data);
})

fs.writeFile(path.join(__dirname,'files','Readme.txt'),"This file is a readme text file for this project",(err)=>{
    if (err) throw err
    console.log("2.  Write file completed");

    fs.appendFile(path.join(__dirname,'files','Readme.txt'),"\n This is raw node project file",(err)=>{
        if (err) throw err;
        console.log("3.  Append file completed");
        fs.rename(path.join(__dirname,'files','Readme.txt'),path.join(__dirname,'files','sample.txt'),(err)=>{
            if (err) throw err;
            console.log("4. Rename completed");
        })
    })
})

fs.readFile(path.join(__dirname,'files','Readme.txt'),'utf8',(err,data)=>{
    if (err) throw err;
    console.log("5.  ",data);
})



console.log("Yo");
// error showing using build-in PROCESS method---

process.on("uncaughtException",(err)=>{
    console.error(`Last:  The uncaught error: ${err}`)
    process.exit(1)
})