const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbConfig = require('./config/database.config');
console.log(dbConfig);

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => console.log('DB connection successful'))
  .catch((err) => {
    console.log('DB connection is not successful... ', err);
  });

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Student Information' });
    }
)

require('./app/routes/routes')(app);

app.listen(4009, () => {
    console.log('Server is succesfully running');
    }
);
