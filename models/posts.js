const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  content: {type: String, required: true},
  author: {type: String, required: true}
})

// postSchema.methods.showEstablished = function() {
//   return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
// }

module.exports = mongoose.model('Post', postSchema)