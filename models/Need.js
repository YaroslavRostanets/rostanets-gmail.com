const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String
  },
  img: {
    type: String
  },
  announcement: {
    type: String,
    default: ''
  },
  text: {
    type: String
  },
  createdAt: {
    type: Number,
    default: Date.now()
  },
  isPublish: {
    type: Boolean,
    default: false
  },
  urlName: {
    type: String
  }
});

schema.statics.getNeeds = async function (count) {
  return await this.find().sort('-createdAt').limit(count).exec();
};

schema.statics.getNeedById = async function (id) {
  return await this.find({_id: id}).exec();
};

const Need = mongoose.model('need', schema);

module.exports = Need;
