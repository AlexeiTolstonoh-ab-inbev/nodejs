const express = require('express')
const serverApp = express()
const port = 3030
const bodyParser = require('body-parser')
const offerRoute = require('./src/controllers/offers')
const cors = require('cors')
const path = require('path')

serverApp.use(cors());
serverApp.use(bodyParser.urlencoded({ extended: false }))
serverApp.use(bodyParser.json())
serverApp.use(express.static(path.join(__dirname, 'pablic')))

serverApp.use('/offers', offerRoute)

serverApp.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
