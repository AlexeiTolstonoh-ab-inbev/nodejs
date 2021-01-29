const express = require('express')
const offerRouter = express.Router()
const Offers = require('../services/offers')
const offerService = new Offers()

offerService.generateData()

offerRouter.get('/', async (req, res) => {
    const offers = offerService.getAllOffers()
    res.json(offers)
})

offerRouter.get('/:id',async (req, res) => {
    const {id} = req.params
    console.log(id)
        const offer = await offerService.getOffersById(id)
        res.json(offer)
})

offerRouter.post('/',async (req, res) => {
    await offerService.postOffer(req.body)
    res.json(`Added`)
        }
)

offerRouter.delete('/:id', (req, res) => {
    const {id} = req.params
       const offers = offerService.deleteOffer(id)
        res.json(offers)
})

offerRouter.put('/:id', async (req, res) => {
        const {id} = req.params
        const body = req.body
       await offerService.updateOffer(id, body)
        res.json(`Changed`)
})
module.exports = offerRouter;
