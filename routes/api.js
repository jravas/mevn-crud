const express = require('express')
const router = express.Router()
const Item = require('../models/item')

// get list of items from database
router.get('/items', (req, res, next) => {
  Item.find({}).then((items) => {
    res.send(items)
  })
})

// add new item to database
router.post('/items', (req, res, next) => {
  Item.create(req.body).then((item) => {
    res.send(item)
  }).catch(next)
})

// update item in database
router.put('/items/:id', (req, res, next) => {
  Item.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
    Item.findOne({_id: req.params.id}).then((item) => {
      res.send(item)
    })
  })
})

// delete item from database
router.delete('/items/:id', (req, res, next) => {
  Item.findByIdAndRemove({_id: req.params.id}).then((item) => {
    res.send(item)
  })
})


module.exports = router
