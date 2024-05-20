const Post = require("../Models/PostModel")
const Comment = require("../Models/CommetModel")


exports.addWithImages = [ (req,res)=>{
    const post = new Post({
        title: req.body.title,
        author: req.body.author,
        images: req.body.images
    });
    post.save()
    .then((post)=>{
        return res.status(200).send(post)
    })
    .catch((err)=>{
        return res.status(200).send(err.message);
    })
}]