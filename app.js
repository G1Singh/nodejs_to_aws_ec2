const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
     res.send("<h1>Express Demo app here</h1> <h4>Success</h4>");
})


app.get('/hard', (req, res) => {
     res.send([
          {
               productId: '101', 
               name: 'fuck'
          },
          {
               productId: '102'
          },
          {
               productId: '103'
          },
     ]);
})


app.listen(port, () => {
     console.log('Demo app is up and listening to port: ', port);
})