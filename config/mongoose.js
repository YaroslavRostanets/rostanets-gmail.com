const config = require('../config');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const uri = config.get('mongoose:uri');
const options = config.get('mongoose:options');

mongoose.connectionPending = mongoose.createConnection(uri, options)
  .then( () => {
    return mongoose.connect(uri, options)
  })
  .catch( err => console.log(err) );

module.exports = mongoose;
