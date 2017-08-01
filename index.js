const express = require('express')
const app = express()
const port = 1234

const server = app.listen(port, () => {
  console.log('Server listening on port', port)
})

app.get('/', (req, res) => (
  res.send('<div>HEYYYYYY</div>')
))
