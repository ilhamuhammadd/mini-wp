const Article = require('../models/Article')
const verify = require('../helpers/verify')
const User = require('../models/User')
const images = require('../helpers/images')
const multer = require('multer')
// console.log(verify)

class ArticleController {

    static findAll(req, res) {
        const valid = verify(req.headers.token)
        // console.log(valid.email)
        User.findOne({
            email: valid.email
        })
        .then(user=>{
            // console.log(user)
            return Article.find({
                author: user._id
            })
            .populate('author')
        })
        .then(article=>{
            res.status(200).json(article)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static findOne(req, res) {
        Article.findOne({
            _id: req.body.id
        })
        .then(article=>{
            res.status(200).json(article)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }


    static create(req, res) {
        
        console.log(req.file)
        console.log(req.body)
        // console.log(req.headers.token)
        const valid = verify(req.headers.token)
        // console.log(valid)
        User.findOne({
            email: valid.email
        })
        .then(user=>{
            let obj = {
                title: req.body.title,
                content: req.body.content,
                status: req.body.status,
                created_at: new Date(),
                imageUrl: req.file.cloudStoragePublicUrl,
                author: user._id
            }
            return Article.create(obj)
        })
        .then(article=>{
            res.status(201).json(article)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
       
    }

    static update(req, res) {
        console.log(req.params.id)
        let obj = {
            title: req.body.title,
            content: req.body.content,
            created_at: new Date
        }

        Article.findOneAndUpdate({_id: req.params.id}, {$set: obj})
            .then(article=>{
                res.status(200).json(article)
            })
            .catch(err=>{
                res.status(500).json(err)
            })
    }

    static delete(req, res) {
        console.log(req.params)
        console.log(req.params.id)
        
        Article.findByIdAndDelete({_id: req.params.id})
            .then(article=>{
                res.status(200).json(article)
            })
            .catch(err=>{
                res.status(500).json(err)
            })
    }
}

module.exports = ArticleController