const Identifier = require("../Models/IdentifierModel");
const Customer = require("../Models/CustomerModel");


exports.createCustomer =[ (req,res)=>{
    const customer = new Customer({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender
    });
    customer.save()
    .then((customer)=>{
        return res.status(200).send(customer)
    })
    .catch((err)=>{
        return res.status(200).send(err.message)
    })
}]

exports.createIdentifierWithCustomer = [ (req, res)=>{
    const identifier = new Identifier({
        cardCode: req.body.cardCode,
        customer: req.body.customer
    })
    identifier.save()
    .then((data)=>{
        return res.status(200).send(data)
    })
    .catch((err)=>{
        return res.status(200).send(err.message)
    })
}]

exports.showAllIdentifiers = [async (req, res)=>{
    try{
        const identifiers = await Identifier.find()
        .populate("customer","-_id-__v")
        return res.status(200).send(identifiers)
    }
    catch(err){
        return res.status(200).send(err.message)
    }
}]