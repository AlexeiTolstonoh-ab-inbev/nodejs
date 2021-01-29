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
       const offer = await OfferModel.findOne({_id: id})
       return offer
    }

   async updateOffer(id, data) {
        const offer = await OfferModel.findOne({_id: id})
        const newOffer = Object.assign(offer,data)
        OfferModel.findOneAndUpdate({_id: id},newOffer,{useFindAndModify:false}).catch(er => console.log(er))
    }

   async postOffer(data) {
        await OfferModel.create(data).catch(e => console.log(e))
    }

   async deleteOffer(id) {
       await OfferModel.findByIdAndDelete({_id: id})
    }
}
