const express = require('express')
const userRouter = express.Router()
const UserModel = require('../../db/models/users')

userRouter.post('/auth', async(req, res) => {
    console.log(req.body)
   const isTrue =  await UserModel.findOne({name: req.body.name})
    console.log(isTrue)
    res.json(isTrue)
})

userRouter.post('/registration', async (req, res) => {
    await UserModel.create({name: req.body.name, password: req.body.password})
    console.log(req.body)
    res.json(`ok`)
    })

module.exports = userRouter;
