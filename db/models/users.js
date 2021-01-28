const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shema = new Schema({
   name: String,
    password: String,
    token: String
})
module.exports = mongoose.model('UserModel',shema )
