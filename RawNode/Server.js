const fs = require('fs')

const fsReadFile = require('fs').readFileSync;

fsReadFile('./files/demo.txt',(err,data)=>{
    // if(err) throw err;
    err && console.log(err);
    console.log(data);
})