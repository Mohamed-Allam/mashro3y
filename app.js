const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
var mocks = require("./src/Mocks/qatarFundsMocks")



const port = process.env.PORT || 3001;

const app = express();
app.use(morgan('tiny'));


app.use(express.static(path.join(__dirname, '/public/')));
// app.use('/specificFolder', express.static(path.join(__dirname, '/specificFolder/')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = ['Home','Projects','About','Events','Contacts'];

const qatarFundsRouter = require("./src/routes/qatarFundsRouter.js")(nav);

app.use('/projects', qatarFundsRouter);

app.get('/', (req, res) => {
  // res.send('Hello from My Crowd funding App :) !');
  // res.sendFile(path.join(__dirname, 'views/index.html'));
  res.render(
    'index',
    {
      title: 'Qatar Funds',
      nav : nav,
      projects : mocks.projects,
      events: mocks.events
    }
  );
});

app.listen(port, () => {
  debug(`... App is up & Running on port ${chalk.green(port)}`);
});
