const Article = require('../models/Article')

class ArticleController {

    static findAll(req, res) {
        Article
            .find()
            .then(articles => {
                res.status(200).json(articles)
            })
            .catch(err => {
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
        let obj = {
            title: req.body.title,
            content: req.body.content,
            created_at: req.body.created_at
        }

        Article.create(obj)
            .then(article=>{
                res.status(201).json(article)
            })
            .catch(err=>{
                res.status(500).json(err)
            })
    }

    static update(req, res) {
        let obj = {
            title: req.body.title,
            content: req.body.content,
            created_at: req.body.created_at
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
        
        Article.deleteOne({_id: req.params.id})
            .then(article=>{
                res.status(200).json(article)
            })
            .catch(err=>{
                res.status(500).json(err)
            })
    }
}

module.exports = ArticleController