const fs = require('fs')
module.exports = class Offers {
    constructor(fileName = '') {
        this.fileName = fileName
        this.offers = []
    }

    generateData() {
        fs.readFile(this.fileName, 'utf8', (err, data) => {
            if (err) throw err;
            this.offers = JSON.parse(data)
        });
    }

    getAllOffers() {
        return this.offers
    }

    getOffersById(id) {
        const getId = Number(id)
        const offer = this.offers.find(el => el.id === getId)
        console.log(offer)
        return offer
    }

    updateOffer(id, data) {
        this.offers[id] = {
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
            },
            id: id
        }
        console.log(this.offers)
        return this.offers
    }

    postOffer(data) {
        const loc = data.address.split(',')
        console.log(loc)
        const newOffer = {
            author: {
                avatar: data.avatar || ''
            },
            offer: {
                title: data.title,
                    location: {
                x: loc[0],
                y: loc[1]
                                },
                price: data.price,
                type: data.type,
                rooms: data.rooms,
                guests: data.guests,
                checkin: data.checkin,
                checkout: data.checkout,
                features: data.features,
                description: data.description,
                photos: data.photos || ``
            },
            id: this.offers.length
        }
        this.offers.push(newOffer)
        return
    }

    deleteOffer(id) {
        const filteredOffers = this.offers.filter(el => el.id != new Number(id))
        this.offers = filteredOffers
        return this.offers
    }

    isIdExist(id) {
        const getId = Number(id)
        const ids = this.offers.map(el => el.id)
        const isInclude = ids.includes(getId)
        console.log(isInclude)
        return isInclude
    }
}
