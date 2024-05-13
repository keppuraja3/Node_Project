const express = require("express")

const app = express()
const port = 9090
const UserRoute  = require("./Routes/UserRoute")
app.use(UserRoute)

app.get("/vanakkam",(req,res)=>{
    res.send("Vanakkam da mapla")
})

app.use(express.json())


//======================== Mongo db config
const mongoose = require("mongoose")

const MONGODB_URL = "mongodb://127.0.0.1.:27017"

mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log(`${MONGODB_URL} connection Successfull....`);
})
.catch((err)=>{
    console.error("Error in connection to mongodb", err.message);
})
//========================

app.listen(port,()=>{
    console.log(`Application run on port ${port}`);
})