const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
mongoose.connect('mongodb://localhost/miniwpserver', {useNewUrlParser: true})

const Schema = mongoose.Schema

let userSchema = new Schema({
    username: String,
    email: {
        type: String,
        validate: {
            validator: function (value) {
                return new Promise((resolve, reject) => {
                    User.findOne({
                        email: value,
                        _id: {
                            $ne: this._id
                        }
                    })
                        .then(data => {
                            if (data) {
                                resolve(false)
                            } else {
                                resolve(true)
                            }
                        })
                        .catch(err => {
                            reject(false)
                        })
                })
            }, message: 'Email already taken!'
        }
    },
    password: String
})

userSchema.pre('save', function(next){
    let salt = bcrypt.genSaltSync(5)
    let hash = bcrypt.hashSync(this.password, salt)
    this.password = hash
    next()
})

let User = mongoose.model('User', userSchema)


module.exports = User