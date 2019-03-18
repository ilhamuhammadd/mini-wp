const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/miniwpserver', { useNewUrlParser: true})

const Schema = mongoose.Schema

let articleSchema = new Schema({
    title: String,
    content: String,
    status: Boolean,
    created_at: Date,
    imageUrl: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

let Article = mongoose.model('articles', articleSchema)

module.exports = Article