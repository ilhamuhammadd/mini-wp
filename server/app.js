const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const routerArticle = require('./routes/Articles')


app.use(cors())
app.use(express.json())
// Setting Body Parse
app.use(express.urlencoded({extended: false}))

// Setting Routes
app.use('/mini-wp', routerArticle)

app.listen(port, ()=> console.log('run forest run', port))