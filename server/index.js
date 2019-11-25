// Express Server
// FIX ME :(
  const express = require('express');
  const path = require('path');
  const router = require('./router');
  const bodyParser = require('body-parser')
  const cors = require('cors')
  const morgan = require('morgan')

  const server = express();
  const port = 3000
  
  server.use(cors())
  server.use(morgan('dev'))
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({extended: true}))
  server.use('/', express.static(path.join(__dirname + '/../client/dist')));
  
  server.use('/', router)
  // server.get('/products', (req, res) => {
  //   res.status(200).send(router.get)
  // })
  
  // server.post('/products', (req, res) => {
  //   res.status(200).send(router.post)
  // })
  
  // server.put('/products/:_id', (req, res) => {
  //   res.status(200).send(router.put)
  // })
  
  // server.delete('/products/:_id', (req, res) => {
  //   res.status(200).send(router.delete)
  // })

  server.listen(port, () => console.log(`Connected to port: ${port}`))