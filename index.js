console.log("start")
const express = require('express')
const serverApp = express()
const port = 3030
const bodyParser = require('body-parser')
const offerRoute = require('./src/controllers/offers')

serverApp.use(bodyParser.json())
serverApp.use(express.urlencoded({ extended: false }));

serverApp.use('/offers', offerRoute)

serverApp.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
