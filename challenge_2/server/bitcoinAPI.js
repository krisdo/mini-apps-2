const axios = require('axios');


var loadBPIData = (start, end) => {

  return axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`)
  .then( ({ data }) => {
    return data.bpi;
  })
  .catch( (data) => {
    console.log('Cannot Fetch BPI data');
  })

};

module.exports = loadBPIData;
