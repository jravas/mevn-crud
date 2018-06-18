const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create Item schema and model
const ItemSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  content: {
    type: String,
    required: [true, 'Content field is required']
  },
  date: {
    type: Date,
  }
  // add in geo location
})

const Item = mongoose.model('item', ItemSchema)

module.exports = Item