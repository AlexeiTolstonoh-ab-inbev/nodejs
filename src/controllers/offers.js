const express = require('express')
const offerRouter = express.Router()
const Offers = require('../services/offers')
const offerService = new Offers('dataOffers.js')
const { body, validationResult } = require('express-validator');

offerService.generateData()

offerRouter.get('/', (req, res) => {
    const offers = offerService.getAllOffers()
    res.json(offers)
})

offerRouter.get('/:id',(req, res) => {
    const {id} = req.params
    console.log(id)
    if(offerService.isIdExist(id)) {
        const offer = offerService.getOffersById(id)
        res.json(offer)
    }
    res.sendStatus(400)
})

offerRouter.post('/',
    body(`title`).isLength({min: 30 , max: 100}),
    body(`price`).isFloat({min: 0, max: 1000000}),
    body('description').isLength({min: 10 , max: 100}),
    (req, res) => {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        } else {
            console.log(req.files)
            console.log(req.body)
            console.log(req)

            offerService.postOffer(req.body)

            res.sendStatus(200)
        }
})

offerRouter.delete('/:id', (req, res) => {
    const {id} = req.params
    if (offerService.isIdExist(id)) {
       const offers = offerService.deleteOffer(id)
        res.json(offers)
    }
    res.sendStatus(404)
})

offerRouter.put('/:id', (req, res) => {
        const {id} = req.params
        const body = req.body
    if (offerService.isIdExist(id) ) {
        offerService.updateOffer(id, body)
        const offers = offerService.getAllOffers()
        res.json(offers)
    }
        res.sendStatus(404)
})
module.exports = offerRouter;
