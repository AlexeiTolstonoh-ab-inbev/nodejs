const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shema = new Schema({
    author: {
        avatar: String
    },
    offer: {
        title: String,
        address: String,
        price: Number,
        type: String,
        rooms: Number,
        guests: Number,
        checkin: String,
        checkout: String,
        features: [String],
        description: String,
        photos: [String]
    },
        location: {
            x: Number,
            y: Number
    }
},
    {
        typeKey: String
    }
)
module.exports = mongoose.model('OfferModel',shema )
