const express = require('express')
const serverApp = express()
const port = 3030
const bodyParser = require('body-parser')
const offerRoute = require('./src/controllers/offers')
const cors = require('cors')
const path = require('path')
const formData = require("express-form-data");
const multer = require('multer')
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

const upload = multer({storage:storageConfig});
cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'images', maxCount: 8 }])

serverApp.use(cors())
serverApp.use(bodyParser.urlencoded({ extended: false }))
serverApp.use(bodyParser.json())
serverApp.use(formData.parse())
serverApp.use(express.static(path.join(__dirname, 'pablic')))

serverApp.use('/offers',cpUpload, offerRoute)

serverApp.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
