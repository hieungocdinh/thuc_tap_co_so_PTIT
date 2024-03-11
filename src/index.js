const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars').engine;
const path = require('path');

const app = express()
const port = 3000

const route = require('./routes');
const db = require('./config/db');

//connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public'))); //static file

//HTTP logger
app.use(morgan('combined'));

//template engine
app.engine(
  "hbs",
  exphbs({ 
    extname: '.hbs',
    helpers:{
        sum: (a, b) => a + b,
    },
  }),
)
app.set('view engine', 'hbs');
app.set('views', './views');
app.set('views', path.join(__dirname, 'resources', 'views'));

//route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})