const express = require("express")

const app = express()
const port = 9090
const UserRoute  = require("./Routes/UserRoute")
app.use(UserRoute)

app.get("/",(req,res)=>{
    res.send("Home page")
})

app.get("/vanakkam",(req,res)=>{
    res.send("Vanakkam da mapla")
})

app.use(express.json())
const identifierAndCustomer = require("./Routes/IdentifierCustomerRoute")
app.use(identifierAndCustomer)

//======================== Mongo db config
const mongoose = require("mongoose")

const MONGODB_URL = "mongodb://localhost:27017/food-valley"

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