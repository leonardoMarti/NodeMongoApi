const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use('*', cors());

require('./database/config');
require('./routes/routes')(app);

app.listen(3000);
console.log('Running on port 3000');
