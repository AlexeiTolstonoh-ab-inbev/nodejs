const express = require('express')
const serverApp = express()
const port = 3030
const bodyParser = require('body-parser')
const offerRouter = require('./src/controllers/offers')
const userRouter = require('./src/controllers/user')
const cors = require('cors')
const path = require('path')
const multer = require('multer')
const expressHbs = require('express-handlebars')
const hbs = require('hbs')
require('./db/index')

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

serverApp.engine("hbs", expressHbs(
    {
        layoutsDir: "views/layouts",
        defaultLayout: "layout",
        extname: "hbs",
    }
))
serverApp.set("view engine", "hbs");


serverApp.use(`/contacts`, (req, res)=>{
    const user = {
        name: `ALex`,
        title: 'title some',
        email: `Lexto92`,
        phone: `+38063`
    }
    res.render(`contact`, user)
})

serverApp.use(`/home`, (req, res)=>{
    res.render(`home`)
})
serverApp.use(`/singIn`, (req, res)=>{
    res.render(`singIn`)
})
serverApp.use(`/registration`, (req, res)=>{
    res.render(`registration`)
})
hbs.registerPartials(__dirname + "/views/partials");

serverApp.use(cpUpload)
serverApp.use('/offers', offerRouter)
serverApp.use('/do', userRouter)


serverApp.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
