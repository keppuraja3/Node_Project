const mongoose = require("mongoose")

const Post = mongoose.model(
    "Post",
    new mongoose.Schema({
        title: String,
        author: String,
        images: [],//OneToFew 
        comments: [ //OneToMany
        {  
            type: mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
        ]
    })
)

module.exports= Post;

// {
//     "title": "Luffy wins in onigashima", 
//     "author":"Echiru Oda",
//     "images":[
//     image1.jpg,
//     image2.jpg,
//     image3.jpg
// ]
// }