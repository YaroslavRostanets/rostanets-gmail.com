const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String
  },
  img: {
    type: String
  },
  text: {
    type: Array
  },
  createdAt: {
    type: Number,
    default: Date.now()
  }
});

schema.statics.getNeeds = async function (count) {
  this.find().sort('-date').limit(10).exec(function(err, needs){
    if (err) throw err;
    return needs;
  })
};


const Need = mongoose.model('Need', schema);

module.exports = Need;
