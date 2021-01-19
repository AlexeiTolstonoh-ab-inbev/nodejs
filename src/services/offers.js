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
        return offer
    }

    updateOffer(id, data) {
        const indexOfNewOffer = this.offers.findIndex(el => el.id)
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
        const newOffer = {
            author: {
                avatar: data.author.avatar || ''
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
            id: this.offers.length
        }
        this.offers.push(newOffer)
        return
    }

    deleteOffer(id) {
        const filteredOffers = this.offers.filter(el => el.id != new Number(id))
        this.offers = filteredOffers
    }
    isIdExist(id){
        const getId = Number(id)
        const ids = this.offers.map( el => el.id)
        const isInclude = ids.includes(getId)
        return isInclude
    }
    isCorrectObject (data) {
        const errors = []
        if(data.offer.title.split('').length < 30) {errors.push('Title length must bee more then 30')}
        if(data.offer.address.y <= 0 && data.offer.address.y > 0) {errors.push('missing Y-coordinate')}
        if(data.offer.address.x <= 0 && data.offer.address.x > 0) {errors.push('missing X-coordinate')}
        if(data.offer.price < 0) {errors.push('Price cant bee less then 0')}
    }
}
