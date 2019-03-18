const router = require('express').Router()
const images = require('../helpers/images')
const multer = require('multer')
const ArticleController = require('../controllers/ArticleController')

router.get('/article', ArticleController.findAll)

router.get('/article/find', ArticleController.findOne)

router.post('/article/create',images.multer.single('imageUrl'),
images.sendUploadToGCS, ArticleController.create)

router.put('/article/edit/:id', ArticleController.update)

router.delete('/article/delete/:id', ArticleController.delete)

module.exports = router