const fs = require('fs')
const OfferModel = require('../../db/models/offers')
module.exports = class Offers {
    constructor() {
        this.offers = []
    }

    generateData() {
        OfferModel.find()
            .then(data => this.offers = data)
            .catch(e => console.log(e))
    }

    getAllOffers() {
        return this.offers
    }

   async getOffersById(id) {
        let offer = {}
        const getId = id
        offer = await OfferModel.findOne({_id: getId})
        console.log(offer)
        return offer
    }

    updateOffer(id, data) {
        OfferModel.findOneAndUpdate({_id: id},{
            author: {
                avatar: data.author.avatar
            },
            offer: {
                title: data.offer.title,
                    address: [
                    {
                        x: data.offer.address.y,
                        y: data.offer.address.y
                    }
                ],
                    price: data.offer.price,
                    type: data.offer.type,
                    rooms: data.offer.rooms,
                    guests: data.offer.guests,
                    checkin: data.offer.checkin,
                    checkout: data.offer.checkout,
                    features: data.offer.features,
                    description: data.offer.description,
                    photos: data.offer.photos
            }
        })
    }

    postOffer(data) {
        return OfferModel.create({
            author: {
                avatar: data.author.avatar
            },
            offer: {
                title: data.offer.title,
                price: data.offer.price,
                type: data.offer.type,
                rooms: data.offer.rooms,
                guests: data.offer.guests,
                checkin: data.offer.checkin,
                checkout: data.offer.checkout,
                features: data.offer.features,
                description: data.offer.description,
                photos: data.offer.photos
            },
            location: {
                x: data.location.x,
                y: data.location.y
            }
        })
    }

   async deleteOffer(id) {
       await OfferModel.findByIdAndDelete({_id: id})
    }
}
