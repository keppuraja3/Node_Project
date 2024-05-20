const UserModel = require("../Models/UserModel")
const {body, validationResult} = require("express-validator")
const express = require('express')
const jwt =require('jsonwebtoken')


exports.insert=[
    body("name").trim().isLength({min:1}).withMessage("Title cannot be empty"),
    body("name").trim().isAlphanumeric().withMessage("Title can contain only letters"),
    body("password").trim().isLength({min:8}).withMessage("Cannot be less than 8 Characters"),
    (req,res)=>{
        const errors = validationResult(req)
    const user = new UserModel ({
        id:3,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
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
