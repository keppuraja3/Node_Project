const express = require("express")

const route = express.Router()

const PostController = require("../Controllers/PostController")

route.post("add/image",PostController.addWithImages)

module.exports = route