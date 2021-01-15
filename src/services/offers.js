const fs = require('fs')
module.exports = class Offers {
constructor(fileName = '') {
    this.fileName = fileName
    this.offers = []
}
generateData(){
    fs.readFile(this.fileName, 'utf8',(err, data) => {
        if(err) throw err;
        this.offers = JSON.parse(data)
    });
}
getAllOffers(){
    return this.offers
}
getOffersById(id){
    const offer = this.offers.find(el => el.id == id)
    console.log(offer)
    return offer
}
postOffer(data){
    const newOffer = {
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
        id: this.offers.length
    }
    this.offers.push(newOffer)
    return
}
deleteOffer(id){
    const filteredOffers = this.offers.filter(el => el.id != new Number(id))
    this.offers = filteredOffers
}
    }