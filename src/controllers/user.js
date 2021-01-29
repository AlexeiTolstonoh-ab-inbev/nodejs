const express = require('express')
const userRouter = express.Router()
const UserModel = require('../../db/models/users')

userRouter.post('/auth', async(req, res) => {
   const isTrue =  await UserModel.findOne({name: req.body.name})
    res.json(isTrue)
})

userRouter.post('/registration', async (req, res) => {
    await UserModel.create({name: req.body.name, password: req.body.password})
    res.json(`ok`)
    })

module.exports = userRouter;
