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
    if(offerService.isIdExist(id)) {
        const offer = offerService.getOffersById(id)
        res.json(offer)
    }
    res.sendStatus(400)
})

offerRouter.post('/',(req, res) => {
   offerService.postOffer(req.body)
    res.sendStatus(200)
})

offerRouter.delete('/:id', (req, res) => {
    const {id} = req.params
    if (offerService.isIdExist(id)) {
        offerService.deleteOffer(id)
        res.sendStatus(200)
    }
    res.sendStatus(404)
})

offerRouter.put('/:id', (req, res) => {
        const {id} = req.params
        const body = req.body
    if (offerService.isIdExist(id)) {
        offerService.updateOffer(id, body)
        const offers = offerService.getAllOffers()
        res.json(offers)
    }
        res.sendStatus(404)
})
module.exports = offerRouter;
