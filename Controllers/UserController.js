const UserModel = require("../Models/UserModel")
const {body, validationResult} = require("express-validator")

exports.insert=[
    body("name").trim().isLength({min:1}).withMessage("Title cannot be empty"),
    body("name").trim().isAlphanumeric().withMessage("Title can contain only letters"),
    body("address").trim().isLength({min:10}).withMessage("Cannot be less htan 10 Characters"),
    (req,res)=>{
        const errors = validationResult(req)
    const user = new UserModel ({
        id:3,
        name: "Tamil",
        email: "tamil@gmail.com",
        phoneNo: 8649038584,
        address: "Avanyapuram"
    })

    user.save()
    .then((u)=>{
        return res.status(200).send(u)
    })
    .catch((err)=>{
        return res.status(200).send(err.message)
    })
}];

exports.list = [(req,res)=>{
    UserModel.find()
    .then((users)=>{
        return res.status(200).send(users)
    })
    .catch((err)=>{
        return res.status(200).sed(err.message)
    })
}]

exports.find = [(req,res)=>{
    UserModel.find({id: req.params.id})
    .then((user)=>{
        return res.status(200).send(user)
    })
    .catch((err)=>{
        return res.status(200).send(err.message)
    })
}]
