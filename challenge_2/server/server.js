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
  console.log(req.query);
  const start = req.query.startDate;
  const end = req.query.endDate;
  loadBPIData(start, end)
  .then( (data) => {
    res.status(200);
    res.send(data);
  })
  .catch( (error) => {
    res.status(400);
    res.send('Sorry, but your specified start date is invalid. Format is YYYY-MM-DD. Please check and try again.')
  });
})
