const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const message = `Hit from IP: ${ip}`
  console.log(message)
  return res.send(message)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
