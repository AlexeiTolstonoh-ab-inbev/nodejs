const express = require('express')
const serverApp = express()
const port = 3030
const bodyParser = require('body-parser')
const offerRoute = require('./src/controllers/offers')
const cors = require('cors')
const path = require('path')
const multer = require('multer')

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file);
        cb(null, "uploads");
    },
    filename: (req, file, cb) =>{
        console.log(file);
        cb(null, file.originalname);
    }
});

const upload = multer({ config: storageConfig })
cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'images', maxCount: 8 }])

serverApp.use(cors())
serverApp.use(bodyParser.urlencoded({ extended: false }))
serverApp.use(bodyParser.json())

serverApp.use(express.static(path.join(__dirname, 'pablic')))
serverApp.use(cpUpload)
serverApp.use('/offers', offerRoute)

serverApp.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
