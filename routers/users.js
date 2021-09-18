const express = require('express')
const user = require('../models/user')
const router = express.Router()

const User = require('../models/user')

router.get('/', async (req, res) => {

  try {

    const user = await User.find()
    res.json(user)

  }
  catch (err) {

    res.send(err)
  }



})


router.get('/:id', async (req, res) => {

  try {

    const user = await User.findById(req.params.id)
    res.json(user)

  }
  catch (err) {

    res.send(err)
  }



})

router.patch('/:id', async (req, res) => {

  try {
    const data = await User.findById(req.params.id);
    data.name = req.body.name
    const a = await data.save()
    res.json(a)
  }
  catch (err) {


  }

})

router.delete('/:id', async (req, res) => {

  try {
    await User.findByIdAndRemove(req.params.id);

    res.send('Deleted Secsfully')


  }
  catch (err) {


  }

})

router.delete('/', async (req, res) => {



  console.log(req.body._id)

  try {
    await User.findByIdAndRemove(req.body._id).then(console.log('done'));

    res.send('Deleted Secsfully')

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