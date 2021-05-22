const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
});

const classroom = mongoose.model('Classroom', UserSchema);
module.exports = classroom;
