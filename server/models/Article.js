const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/miniwpserver', { useNewUrlParser: true})

const Schema = mongoose.Schema

let articleSchema = new Schema({
    title: String,
    content: String,
    created_at: Date
})

let Article = mongoose.model('articles', articleSchema)

module.exports = Article