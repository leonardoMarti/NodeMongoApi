const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/nodemongoapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDb connected'));
