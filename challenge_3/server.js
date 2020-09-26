const express = require('express');
const app = express();
const port = 4000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(port, () => {
  console.log(`listening ${port}`);
})

