const express = require('express')
const offerRouter = express.Router()
const Offers = require('../services/offers')

const offerService = new Offers('file.js')
offerService.generateData()

offerRouter.get('/', (req, res) => {
    const offers = offerService.getAllOffers()
    res.json(offers)
})

offerRouter.get('/:id',(req, res) => {
    const {id} = req.params
    const offer = offerService.getOffersById(id)
    res.json(offer)
})

offerRouter.post('/',(req, res) => {
   offerService.postOffer(req.body)
    res.sendStatus(200)
})

offerRouter.delete('/:id', (req, res) => {
    const {id} = req.params
    offerService.deleteOffer(id)
    res.sendStatus(200)
})

module.exports = offerRouter;
