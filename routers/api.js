const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.get('/', async (req, res) => {

  try {

    //const user = await User.find()
    res.json({user : "node"})

  }
  catch (err) {

    res.send(err)
  }



})

router.post('/', async (req, res) => {

  const user = new User({

    name: req.body.name,
    email: req.body.email
  })

  try {
    const data = await user.save()
    res.json(data)

    // console.log(data)

  }
  catch (err) {

    res.send(err)
  }
})


module.exports = router