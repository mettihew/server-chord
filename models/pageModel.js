const mongoose = require('mongoose')

const pageSchema = new mongoose.Schema({
   username: {
    type: String,
    required: true
   },
   text: {
    type: String,
    required: true
   }
}, {timestamps: true})

module.exports = mongoose.model("Page", pageSchema)