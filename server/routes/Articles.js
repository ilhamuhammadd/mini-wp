const router = require('express').Router()
const ArticleController = require('../controllers/ArticleController')

router.get('/article', ArticleController.findAll)

router.get('/article/find', ArticleController.findOne)

router.post('/article/create', ArticleController.create)

router.put('/article/edit/:id', ArticleController.update)

router.delete('/article/delete/:id', ArticleController.delete)

module.exports = router