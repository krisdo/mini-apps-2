const express = require('express');
const app = express();
const port = 4000;
const loadBPIData = require('./bitcoinAPI.js');

app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(port, () => {
  console.log(`listening ${port}`);
})

app.get('/data', (req, res) => {
   //2013-09-01
  //2013-09-05
  loadBPIData('2013-09-01', '2013-09-05')
  .then( (data) => {
    res.status(200);
    res.send(data);
  })
  .catch( (error) => {
    res.status(400);
    console.log(error);
  });
})
