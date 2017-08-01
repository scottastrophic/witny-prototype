const express = require('express')
const path = require('path')
const swig = require('swig')
const app = express()
const port = 1234

const server = app.listen(port, () => {
  console.log('Server listening on port', port)
})

app.use('/styles', express.static('styles'))

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views')

app.get('/', (req, res) => (
  res.sendFile(path.join(__dirname + '/templates/home.html'))
))

app.get('/profile', (req, res) => (
   res.sendFile(path.join(__dirname + '/templates/profile.html'))
))

app.get('/spotlight', (req, res) => (
   res.sendFile(path.join(__dirname + '/templates/spotlight.html'))
))

app.get('/test', (req, res) => (
  res.render('test', {})
))
