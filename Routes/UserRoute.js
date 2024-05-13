const express = require("express")

const route = express.Router()

const UserController = require("../Controllers/UserController")

route.get("/user/add", UserController.insert)


module.exports =route