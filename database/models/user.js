const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: String,
  surname: String,
});

const user = mongoose.model('User', schema);
module.exports = user;
