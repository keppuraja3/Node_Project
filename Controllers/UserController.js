const UserModel = require("../Models/UserModel")

exports.insert=[(req,res)=>{
    const user = new UserModel ({
        id:3,
        name: "Keppuraja",
        email: "keppuraja3@gmail.com",
        phoneNo: 9786454635,
        address: "Madurai"
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
