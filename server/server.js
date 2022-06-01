const express = require('express');
const app = express();
const path = require('path');
const configPort = 3000;
app.use(express.static('public'));


app.get('*',(req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.listen(configPort, () => {
    console.log('server is up')
});