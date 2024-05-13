const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    id:{type: Number},
    name: {type: String, required: true},
    email: {type: String, required: true},
    phoneNo: {type: Number},
    address: {type: String}
},{timestamps:true}
)

module.exports