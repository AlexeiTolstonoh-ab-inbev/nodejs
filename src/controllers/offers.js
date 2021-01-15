const express = require('express')
const offerRouter = express.Router()
const  Offers = require('../services/offers')
const offerService = new Offers()


offerRouter.get('/', (req, res)=>{
const offers = offerService.getAllOffers()
    res.json(offers)
})

offerRouter.get('/:id',(req, res)=>{
const {id} = req.params
    const offer = offerService.getOffersById(id)
})

offerRouter.post('/',(req, res)=>{
const body = req.body
    console.log(body)
res.sendStatus(200)
})

offerRouter.delete('/:id', (req, res)=>{

})

module.exports = offerRouter;
